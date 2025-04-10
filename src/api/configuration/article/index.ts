import http from "@/utils/request";

export function getIndex<T>(){
    return http.get<T>({
        url:'/configuration/article_index.json',
        responseType:"json"
    })
}

export function getArticle<T>(id:any){
    return http.get<T>({
        url:`/configuration/article/${id}.json`,
        responseType:"json"
    })
}

export function getIndexFromBackend<T>() {
    return http.get<T>({
        baseURL: 'http://localhost:5556',
        url: '/main/configuration/article_index.json',
        responseType: 'json'
    })
}

export function getArticleFromBackend<T>(id:any){
    return http.get<T>({
        baseURL: 'http://localhost:5556',
        url:`/main/configuration/article/${id}.json`,
        responseType:"json"
    })
}