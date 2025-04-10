import fs from 'fs'
import path from 'path'

import type { Request, Response } from "express"

import { FILE_TYPE } from '@/utils/enums'

// uploadFile: just upload '.json' file
const uploadFile = (req: Request, res: Response) => {
    const { filename, fileType, data } = req.body
    if (!filename.endsWith('.json')) 
        res.status(400).json({
            code: 400,
            msg: 'wrong file type',
        })

    let filePath = path.join(__dirname, '../..', 'static')

    switch (fileType) {
        case FILE_TYPE.ARTICLE:
        case FILE_TYPE.PICTURE:
        case FILE_TYPE.PRODUCT:
            const prefix = "configuration"
            filePath = path.join(filePath, prefix, fileType, filename)
            break
        case FILE_TYPE.INDEX:
            filePath = path.join(filePath, filename)
            break
    }

    fs.writeFileSync(filePath, JSON.stringify(data))
    res.status(200).json({
        code: 200,
        msg: 'ok'
    })
}

export default uploadFile