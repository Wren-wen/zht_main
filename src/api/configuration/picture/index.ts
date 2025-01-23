import http from "@/utils/request";

export function getIndex<T>(){
    return http.get<T>({
        url:'/configuration/picture_index.json',
        responseType:"json"
    })
}

export function getArticle<T>(id:any){
    return http.get<T>({
        url:`/configuration/picture/${id}.json`,
        responseType:"json"
    })
}

export function getItem<T>(id:any){
    return http.get<T>({
        url:`/configuration/picture/${id}.json`,
        responseType:"json"
    })
}
