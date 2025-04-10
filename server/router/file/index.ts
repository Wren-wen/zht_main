import express from 'express'
import uploadFile from './upload'

const fileRouter = express.Router()

fileRouter.post('/upload', uploadFile)

export default fileRouter