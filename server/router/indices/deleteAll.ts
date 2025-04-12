import type { Request, Response } from 'express'

import { useIndicesModel } from '@/models/indices'

const deleteAllIndices = async (req: Request, res: Response) => {
    if (req.method !== 'DELETE') {
        res.status(400).json({
            code: 400,
            msg: 'wrong http method',
        })
        return
    }

    const indicesModel = useIndicesModel()

    await indicesModel.deleteAll()

    res.status(200).json({
        code: 200,
        msg: 'ok'
    })
}

export default deleteAllIndices