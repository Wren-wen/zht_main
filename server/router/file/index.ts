import express from 'express'
import uploadFile from './upload'
import deleteFile from './delete'

const fileRouter = express.Router()

fileRouter.post('/upload', uploadFile)
fileRouter.delete('/delete', deleteFile)

export default fileRouter