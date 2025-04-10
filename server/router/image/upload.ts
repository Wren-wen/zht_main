import path from 'path'

import multer from 'multer'
import type { Request } from "express"

import { FILE_TYPE } from '@/utils/enums'

const _storage = multer.diskStorage({
    destination: (req: Request, _, cb) => {
        const filePath = path.join(__dirname, '../..', 'static', 'configuration', FILE_TYPE.IMAGE)
        cb(null, filePath)
    },
    filename: (_, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname
        cb(null, uniqueName)
    }
})

const upload = multer({ storage: _storage })

export default upload

