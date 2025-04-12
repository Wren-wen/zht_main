import fs from 'fs'
import path from 'path'

import type { Request, Response } from "express"

import { FILE_TYPE, ENV } from '@/utils/enums'
import { useIndicesModel, IndicesReq, genEmptyIndices } from '@/models/indices'

const NODE_ENV = process.env.NODE_ENV || ENV.DEV
const indicesModel = useIndicesModel()

const createNewIndex = async (
    fileType: FILE_TYPE, 
    indices: IndicesReq
): Promise<string> => {
    try {
        await indicesModel.appendIndexFile(fileType, indices)
    } catch (err) {
        throw err
    }

    return await indicesModel.getLastIndexId(fileType)
}

const updateIndex = async (
    fileType: FILE_TYPE, 
    id: string,
    indices: IndicesReq
): Promise<string> => {
    return await indicesModel.modifyIndexFile(fileType, id, indices)
}

// uploadFile: just upload '.json' file
const uploadFile = async (req: Request, res: Response) => {
    if (req.method !== 'POST') {
        res.status(400).json({
            code: 400,
            msg: 'wrong http method',
        })
        return
    }

    const { fileType, data } = req.body
    const { id } = req.body
    const isUpdate = id.length !== 0

    let filePath = path.join(__dirname, '../..', 'static')
    const prefix = "configuration"

    let indices: IndicesReq = genEmptyIndices()
    for (const key of Object.keys(indices)) {
        indices[key] = data[key]
    }

    let upMsg: string = ''
    let fileId: string = ''
    let filename: string = ''
    if (!isUpdate) {
        fileId = await createNewIndex(fileType, indices)
        filename = `${fileId}.json`
    } else {
        upMsg = await updateIndex(fileType, id, indices)
        filename = `${id}.json`
    }

    switch (fileType) {
        case FILE_TYPE.ARTICLE:
        case FILE_TYPE.PICTURE:
        case FILE_TYPE.PRODUCT:
            filePath = path.join(filePath, prefix, fileType, filename)
            break
        case FILE_TYPE.INDEX: // deprecated: index file can not be uploaded to server
            filePath = path.join(filePath, prefix, filename)
            break
    }

    if (!isUpdate) data["_id"] = fileId
    fs.writeFileSync(filePath, JSON.stringify(data))

    if (!isUpdate) {
        const baseURL = Number(NODE_ENV) === ENV.DEV ? 'http://localhost:5556' : 'http://110.42.101.86:5556'
        const pathList = [baseURL, 'main', prefix, filename]
        if (fileType !== FILE_TYPE.INDEX)
            pathList.splice(-1, 0, fileType)
        const rspPath = pathList.join('/')
    
        res.status(200).json({
            code: 200,
            msg: 'ok',
            data: {
                path: rspPath
            }
        })
    } else {
        res.status(200).json({
            code: 200,
            msg: upMsg
        })
    }
}

export default uploadFile