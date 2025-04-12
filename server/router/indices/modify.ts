import type { Request, Response } from "express"

import { useIndicesModel, IndicesReq } from "@/models/indices"

const modifyIndices = async (req: Request, res: Response) => {
    if (req.method !== 'PUT') {
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

    let msg = await indicesModel.modifyIndexFile(body.fileType, body.id, indicesReq)

    res.status(200).json({
        code: 200,
        msg
    })
}

export default modifyIndices