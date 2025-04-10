import type { Request, Response } from "express"

import { useNewsModel } from "@/models"

const createNews = async (req: Request, res: Response) => {
    if (req.method !== 'POST') {
        res.status(400).json({
            code: 400,
            msg: "wrong http method",
        })
    }

    const newsModel = useNewsModel()
    const body = req.body

    try {
        await newsModel.addNews(body)
    } catch (err: any) {
        res.status(500).json({
            code: 500,
            msg: err
        })
    }

    res.status(200).json({
        code: 200,
        msg: "ok",
    })
}

export default createNews