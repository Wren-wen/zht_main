import type { Request, Response } from "express"

import { useNewsModel } from "@/models"

const retrieveAllNews = async (req: Request, res: Response) => {
    if (req.method !== 'GET') {
        res.status(400).json(
            {
                code: 400,
                msg: "wrong http method",
            }
        )
        return
    }

    const newsModel = useNewsModel()
    const news = await newsModel.findAllNews()

    res.status(200).json(
        {
            code: 200,
            msg: "ok",
            data: news
        }
    )
}

export default retrieveAllNews

