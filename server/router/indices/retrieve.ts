import type { Request, Response } from "express"

import { useIndicesModel } from "@/models/indices"

const retrieveIndices = async (req: Request, res: Response) => {
    if (req.method !== 'GET') {
        res.status(400).json({
            code: 400,
            msg: 'wrong http method',
        })
        return
    }

    const indicesModel = useIndicesModel()
    const body = req.body
    const id = ('id' in body) ? body.id : ""

    let indices = await indicesModel.retrieveAllIndices(body.fileType, id)
    if (indices == null) {
        res.status(202).json({
            code: 202,
            msg: 'can not find data by this "id"'
        })
        return
    }

    res.status(200).json({
        code: 200,
        msg: 'ok',
        data: {
            indices,
        }
    })
}

export default retrieveIndices