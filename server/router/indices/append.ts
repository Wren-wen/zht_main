import type { Request, Response } from "express"

import { useIndicesModel, IndicesReq } from "@/models/indices"

const appendIndices = async (req: Request, res: Response) => {
    if (req.method !== 'POST') {
        res.status(400).json({
            code: 400,
            msg: 'wrong http method',
        })
        return
    }

    const indicesModel = useIndicesModel()
    const body = req.body
    let indicesReq: IndicesReq = {
        cover: body.cover,
        title: body.title,
        title_en: body.title_en,
        timestamp: body.timestamp,
        tags: body.tags
    }

    try {
        await indicesModel.appendIndexFile(body.fileType, indicesReq)
    } catch (err: any) {
        res.status(500).json({
            code: 500,
            msg: err,
        })
        return
    }

    res.status(200).json({
        code: 200,
        msg: 'ok'
    })
}

export default appendIndices