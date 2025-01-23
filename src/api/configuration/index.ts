import http from "@/utils/request";

export function getImageBed<T>(id:any){
    return http.get<T>({
        url:`/configuration/image_bed/${id}`,
        responseType: "blob"
    })
}
