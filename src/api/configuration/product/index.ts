import http from "@/utils/request";

export function getIndex<T>(){
    return http.get<T>({
        url:'/configuration/product_index.json',
        responseType:"json"
    })
}

export function getProduct<T>(id:any){
    return http.get<T>({
        url:`/configuration/product/${id}.json`,
        responseType:"json"
    })
}

export function getIndexFromBackend<T>() {
    return http.get<T>({
        baseURL: 'http://localhost:5556',
        url: '/main/configuration/product_index.json',
        responseType: 'json'
    })
}

export function getProductFromBackend<T>(id:any){
    return http.get<T>({
        baseURL: 'http://localhost:5556',
        url:`/main/configuration/product/${id}.json`,
        responseType:"json"
    })
}
