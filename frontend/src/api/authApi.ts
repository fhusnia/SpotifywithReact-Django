import  iaxios  from "./iaxios"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IAuthData<T extends 'customer'|'artist' > {
    id:number
    token: string
    user_type: T
    username: string
    first_name: string
    last_name: string
    email: string
    image: string
}


export function loginCustomer(username: string,password: string){
    return iaxios.post<IAuthData<'customer'>>('/auth/customer-login/',{username,password})
}

export function loginArtist(username: string,password: string){
    return iaxios.post<IAuthData<'artist'>>('/auth/artist-login/',{username,password})
}

export interface ICustomerRegisterParams{
    first_name: string;last_name: string; username: string; password: string; email: string; birth_date: string; gender: string; image:File
}

export function registerArtist(data: ICustomerRegisterParams){
    const payload = new FormData()
    for (let [key,value] of Object.entries(data)){
        payload.append(key,value)
    }
    return iaxios.post<IAuthData<'artist'>>('/auth/artist-register/',payload,{headers: {'Content-Type': 'multipart/form-data'}})
}


export function logout() {
    return iaxios.post('/auth/logout/')
}
