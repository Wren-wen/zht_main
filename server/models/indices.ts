import mongoose from "mongoose"

import { ENV, FILE_TYPE, UPDATE_INFO } from "@/utils/enums"

const { Schema } = mongoose
const NODE_ENV = process.env.NODE_ENV || ENV.DEV

interface _Tags {
    zh: string,
    en: string
}

interface IndicesReq {
    cover: string,
    title: string,
    title_en: string,
    timestamp: string,
    tags: Array<_Tags>,
    [key: string]: any
}

const genEmptyIndices = (): IndicesReq => {
    return {
        cover: '',
        title: '',
        title_en: '',
        timestamp: '',
        tags: []
    }
}

const indicesSchema = new Schema({
    cover: String,
    title: String,
    title_en: String,
    timestamp: String,
    tags: [
        {
            zh: String,
            en: String,
            _id: false
        }
    ]
}, { versionKey: false })

const ArticleIndices = mongoose.model('ArticleIndices', indicesSchema)
const PictureIndices = mongoose.model('PictureIndices', indicesSchema)
const ProductIndices = mongoose.model('ProductIndices', indicesSchema)

class IndicesModel {
    art: typeof ArticleIndices
    pic: typeof PictureIndices
    pro: typeof ProductIndices

    constructor(art: typeof ArticleIndices,
        pic: typeof PictureIndices, pro: typeof ProductIndices) {
        this.art = art
        this.pic = pic
        this.pro = pro
    }

    async retrieveAllIndices(fileType: FILE_TYPE, _id: string = "") {
        let handler: any
        switch(fileType) {
            case FILE_TYPE.ARTICLE:
                handler = this.art
                break
            case FILE_TYPE.PICTURE:
                handler = this.pic
                break
            case FILE_TYPE.PRODUCT:
                handler = this.pro
                break
        }

        if (_id == "") // find all items
            return await handler.find()

        const indices = await handler.findById(_id).exec()
        return indices
    }

    async appendIndexFile(fileType: FILE_TYPE, indices: IndicesReq) {
        let handler: any
        switch(fileType) {
            case FILE_TYPE.ARTICLE:
                handler = this.art
                break
            case FILE_TYPE.PICTURE:
                handler = this.pic
                break
            case FILE_TYPE.PRODUCT:
                handler = this.pro
                break
        }

        try {
            await handler.create(indices)
        } catch (err: any) {
            throw err
        }
    }

    async modifyIndexFile(fileType: FILE_TYPE, _id: string, newIndices: IndicesReq): Promise<string> {
        let handler: any
        switch(fileType) {
            case FILE_TYPE.ARTICLE:
                handler = this.art
                break
            case FILE_TYPE.PICTURE:
                handler = this.pic
                break
            case FILE_TYPE.PRODUCT:
                handler = this.pro
                break
        }

        const res = await handler.updateOne({ _id }, newIndices)
        let upMsg: string
        if (!res.acknowledged)
            upMsg = UPDATE_INFO.NOT_RECV
        else if (!res.matchedCount)
            upMsg = UPDATE_INFO.NO_MATCH
        else
            upMsg = UPDATE_INFO.SUCCESS

        return upMsg
    }

    async deleteIndexFile(fileType: FILE_TYPE, _id: string) {
        let handler: any
        switch(fileType) {
            case FILE_TYPE.ARTICLE:
                handler = this.art
                break
            case FILE_TYPE.PICTURE:
                handler = this.pic
                break
            case FILE_TYPE.PRODUCT:
                handler = this.pro
                break
        }

        await handler.deleteOne({ _id })
    }

    async getLastIndexId(fileType: FILE_TYPE): Promise<string> {
        let handler: any
        switch(fileType) {
            case FILE_TYPE.ARTICLE:
                handler = this.art
                break
            case FILE_TYPE.PICTURE:
                handler = this.pic
                break
            case FILE_TYPE.PRODUCT:
                handler = this.pro
                break
        }
        
        const lastEntry = await handler.findOne().sort({ _id: -1 }).select()
        return lastEntry._id
    }

    /* debug */
    async deleteAll() {
        // if (NODE_ENV === ENV.DEV) {
            await this.art.deleteMany({})
            await this.pic.deleteMany({})
            await this.pro.deleteMany({})
        // }
    }
}

export const useIndicesModel = () => new IndicesModel(ArticleIndices, PictureIndices, ProductIndices)
export {
    IndicesReq,
    genEmptyIndices
}