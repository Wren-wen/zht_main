import mongoose from 'mongoose'

import { KEEL_TAG, FILE_EXT } from '@/utils/enums'

const { Schema } = mongoose

interface DocsReq {
    title: string,
    title_en: string,
    uploadDate: string,
    fileTag: KEEL_TAG,
    fileExt: FILE_EXT,
    filePath: string
}

const docsSchema = new Schema({
    title: String,
    title_en: String,
    uploadDate: String,
    fileTag: KEEL_TAG,
    fileExt: FILE_EXT,
    filePath: String,
}, { versionKey: false })

const Docs = mongoose.model('Docs', docsSchema)

class DocsModel {
    docs: typeof Docs
    
    constructor(docs: typeof Docs) {
        this.docs = docs
    }

    async addDoc(doc: DocsReq) {
        try {
            await this.docs.create(doc)
        } catch (err: any) {
            throw err
        }
    }

    async filterByTag(tag: KEEL_TAG) {
        
    }
}