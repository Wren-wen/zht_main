import http from "@/utils/request";

export function getIndex<T>(){
    return http.get<T>({
        url:'/configuration/picture_index.json',
        responseType:"json"
    })
}

export function getPicture<T>(id:any){
    return http.get<T>({
        url:`/configuration/picture/${id}.json`,
        responseType:"json"
    })
}

export function getIndexFromBackend<T>() {
    return http.get<T>({
        baseURL: 'http://localhost:5556',
        url: '/main/configuration/picture_index.json',
        responseType: 'json'
    })
}

export function getPictureFromBackend<T>(id:any){
    return http.get<T>({
        baseURL: 'http://localhost:5556',
        url:`/main/configuration/picture/${id}.json`,
        responseType:"json"
    })
}
