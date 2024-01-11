import { iaxios } from "./iaxios"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ILoginData<T extends 'customer'|'artist' > {
    id:number,
    token: string,
    user_type: T,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    image: string,
    updated: string,
    created: string,

}


export function loginCustomer(username: string,password: string){
    return iaxios.post<ILoginData<'customer'>>('/auth/customer-login/',{username,password})
}

export function loginArtist(username: string,password: string){
    return iaxios.post<ILoginData<'artist'>>('/auth/artist-login/',{username,password})
}

interface ICustomerRegisterParams{
    firstNname: string;lastName: string; username: string; password: string; email: string; birthDate: string; gender: string; image:File
}

export function registerArtist(data: ICustomerRegisterParams){
    const payload = new FormData()
    for (let [key,value] of Object.entries(data)){
        payload.append(key,value)
    }
}
