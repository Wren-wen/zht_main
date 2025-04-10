import express, { Response } from "express"
import cors from "cors"

import { ENV } from "@/utils/enums"
import newsRouter from "./news"
import fileRouter from "./file"
import imageRouter from "./image"
import indicesRouter from "./indices"

const _app = express()

_app.use(cors({
    origin: [
        "https://www.zhtaero.com",
        "https://deploy.zhtaero.com",
        Number(process.env.NODE_ENV) == ENV.DEV ? '*' : ''
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
_app.use(express.json({ limit: '500mb' }))
_app.use(express.urlencoded({ limit: '500mb', extended: true }))
_app.use('/main', express.static('static', {
    maxAge: '30d',
    setHeaders: (res: Response, path: string) => {
        if (path.endsWith('.webp') || path.endsWith('.json')) {
            res.header(
                'Cache-Control',
                'public, max-age=2592000, immutable'
            )
        }
    }
}))

_app.use('/news', newsRouter)
_app.use('/file', fileRouter)
_app.use('/image', imageRouter)
_app.use('/indices', indicesRouter)

export {
    _app as app
}