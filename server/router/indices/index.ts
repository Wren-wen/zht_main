import express from 'express'
import retrieveIndices from './retrieve'
import appendIndices from './append'

const indicesRouter = express.Router()

indicesRouter.get('/retrieve', retrieveIndices)
indicesRouter.post('/append', appendIndices)

export default indicesRouter