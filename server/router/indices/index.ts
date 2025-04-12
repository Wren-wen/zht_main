import express from 'express'
import retrieveIndices from './retrieve'
import appendIndices from './append'
import modifyIndices from './modify'
import deleteIndices from './delete'
import deleteAllIndices from './deleteAll'

const indicesRouter = express.Router()

indicesRouter.get('/retrieve', retrieveIndices)
indicesRouter.post('/append', appendIndices)
indicesRouter.put('/modify', modifyIndices)
indicesRouter.delete('/delete', deleteIndices)
indicesRouter.delete('/delall', deleteAllIndices)

export default indicesRouter