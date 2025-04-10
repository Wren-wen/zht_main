import express from 'express'
import type { Request, Response } from 'express'

import upload from './upload'
import { ENV } from '@/utils/enums'

const imageRouter = express.Router()
const NODE_ENV = process.env.NODE_ENV || ENV.DEV

imageRouter.post('/upload', upload.single('image'), async (req: Request, res: Response) => {
    // res.header('Access-Control-Allow-Origin', '*');
    const baseURL = Number(NODE_ENV) === ENV.DEV ? 'http://localhost:5556' : 'http://110.42.101.86:5556'
    let path = req.file?.path
    let pathList = path?.split('static').slice(1) as string[]
    let suffix = ''
    if (pathList?.length > 1)
        suffix = pathList.join('')
    else
        suffix = pathList[0]

    const urlJoin = await import('url-join')
    path = urlJoin.default(baseURL, 'main', suffix.replaceAll(/\\+/g, '/'))

    res.status(200).json({
        code: 200,
        msg: 'ok',
        data: {
            path,
        }
    })
})

export default imageRouter