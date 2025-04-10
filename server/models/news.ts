import mongoose from 'mongoose'

const { Schema } = mongoose

interface _Lan {
    zh: string,
    en: string
}

interface _Frame {
    type_: number,
    height?: number,
    txt?: string,
    txt_en?: string,
    color?: string,
    fontSize?: number,
    fontWeight?: string,
    decoration?: number,
    src?: string,
    href?: string
}

interface NewsReq {
    cover: string,
    title: string,
    title_en: string,
    timestamp: string,
    tags: Array<_Lan>,
    frame: Array<_Frame>
}

const newsSchema = new Schema({
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
    ],
    frame: [
        {
            type_: Number,
            height: Number,
            txt: String,
            txt_en: String,
            color: String,
            fontSize: Number,
            fontWeight: String,
            decoration: Number,
            src: String,
            href: String,
            _id: false,
        }
    ],
}, { versionKey: false })

const News = mongoose.model('News', newsSchema)

function createEmptyNewsReq(): NewsReq {
    return {
        cover: '',
        title: '',
        title_en: '',
        timestamp: '',
        tags: [],
        frame: []
    }
}

class NewsModel {
    news: typeof News

    constructor(news: typeof News) {
        this.news = news
    }

    async findAllNews() {
        const news = await this.news.find()
        return news
    }

    async addNews(_news: NewsReq) {
        try {
            await this.news.create(_news)
        } catch (err: any) {
            throw err
        }
    }

    // Debug
    async deleteAll() {
        await this.news.deleteMany({})
    }
}

export const useNewsModel = () => new NewsModel(News)
export {
    NewsReq,
    createEmptyNewsReq
}