import type { Request, Response } from "express"

import { useIndicesModel } from "@/models/indices"
import { FILE_TYPE } from "@/utils/enums"

const retrieveIndices = async (req: Request, res: Response) => {
    if (req.method !== 'GET') {
        res.status(400).json({
            code: 400,
            msg: 'wrong http method',
        })
        return
    }

    const indicesModel = useIndicesModel()
    const query = req.query
    const id = ('id' in query) ? query.id : ""

    let indices = await indicesModel.retrieveAllIndices(query.fileType as FILE_TYPE, id as string)
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