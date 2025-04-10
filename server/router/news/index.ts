import express from "express"
import retrieveAllNews from "./retrieve"
import createNews from "./create"

const newsRouter = express.Router()

newsRouter.get('/retrieve', retrieveAllNews)
newsRouter.post('/create', createNews)

export default newsRouter