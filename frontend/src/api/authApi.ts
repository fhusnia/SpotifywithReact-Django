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


export function getCustomerLoginData(username: string,password: string){
    return iaxios.post('/auth/customer-login/',{username,password})
}