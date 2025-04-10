import http from "@/utils/request";

export function getImageBed<T>(id:any){
    return http.get<T>({
        url:`/configuration/image_bed/${id}`,
        responseType: "blob"
    })
}

export function getImageBedFromBackend<T>(id:any) {
    return http.get<T>({
        baseURL: 'http://localhost:5556',
        url: `/main/configuration/image_bed/${id}`,
        responseType: 'blob'
    })
}
