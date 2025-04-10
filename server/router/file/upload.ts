import fs from 'fs'
import path from 'path'

import type { Request, Response } from "express"

import { FILE_TYPE, ENV } from '@/utils/enums'

const NODE_ENV = process.env.NODE_ENV || ENV.DEV

// uploadFile: just upload '.json' file
const uploadFile = (req: Request, res: Response) => {
    const { filename, fileType, data } = req.body
    if (!filename.endsWith('.json')) 
        res.status(400).json({
            code: 400,
            msg: 'wrong file type',
        })

    let filePath = path.join(__dirname, '../..', 'static')
    const prefix = "configuration"

    switch (fileType) {
        case FILE_TYPE.ARTICLE:
        case FILE_TYPE.PICTURE:
        case FILE_TYPE.PRODUCT:
            filePath = path.join(filePath, prefix, fileType, filename)
            break
        case FILE_TYPE.INDEX:
            filePath = path.join(filePath, prefix, filename)
            break
    }

    fs.writeFileSync(filePath, JSON.stringify(data))

    const baseURL = Number(NODE_ENV) === ENV.DEV ? 'http://localhost:5556' : 'http://110.42.101.86:5556'
    const pathList = [baseURL, 'main', prefix, filename]
    if (fileType !== FILE_TYPE.INDEX)
        pathList.splice(-2, 0, fileType)
    const rspPath = pathList.join('/')

    res.status(200).json({
        code: 200,
        msg: 'ok',
        data: {
            path: rspPath
        }
    })
}

export default uploadFile