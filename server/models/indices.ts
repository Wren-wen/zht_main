import mongoose from "mongoose"

import { FILE_TYPE } from "@/utils/enums"

const { Schema } = mongoose

interface _Tags {
    zh: string,
    en: string
}

interface IndicesReq {
    cover: string,
    title: string,
    title_en: string,
    timestamp: string,
    tags: Array<_Tags>
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
            _id: false,
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

    async retrieveAllIndices(fileType: FILE_TYPE, _id: number = -1) {
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

        if (_id == -1)
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

    async modifyIndexFile() {

    }
}

export const useIndicesModel = () => new IndicesModel(ArticleIndices, PictureIndices, ProductIndices)
export {
    IndicesReq
}