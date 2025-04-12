import fs from 'fs'
import path from 'path'

import type { Request, Response } from "express"

import { useIndicesModel } from '@/models/indices'

const indicesModel = useIndicesModel()

const deleteFile = async (req: Request, res: Response) => {
    if (req.method !== 'DELETE') {
        res.status(400).json({
            code: 400,
            msg: 'wrong http method',
        })
        return
    }

    const { id, fileType } = req.body

    // delete concrete file
    const prefix = 'configuration'
    const filename = `${id}.json`
    const filePath = path.join(__dirname, '../..', 'static', prefix, fileType, filename)

    try {
        fs.rmSync(filePath)
        // delete index file
        await indicesModel.deleteIndexFile(fileType, id)
    } catch (_) {
        res.status(404).json({
            code: 404,
            msg: 'file did not exist'
        })
        return
    }
    
    res.status(200).json({
        code: 200,
        msg: 'ok'
    })
}

export default deleteFile