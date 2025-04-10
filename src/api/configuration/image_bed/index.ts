import http from '@/utils/request'

export function uploadImage<T>(formData) {
    return http.post<T>({
        baseURL: 'http://localhost:5556',
        url: '/image/upload',
        responseType: 'json',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data: formData
    })
}