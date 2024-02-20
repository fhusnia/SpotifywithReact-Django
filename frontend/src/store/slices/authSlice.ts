import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginCustomer,loginArtist, ICustomerRegisterParams, registerArtist, logout } from "../../api/authApi"
import { setTokenToAxiosInstance,removeTokenFromAxiosInstance } from "../../api/iaxios"



interface IAuthReduxState {
    id: number
    token: string
    user_type: 'unauthorized' | 'customer' | 'artist'
    username: string
    first_name: string
    last_name: string
    email: string
    image: string
}

const initialState = {
    id: 0,
    token: '',
    user_type: 'unauthorized',
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    image: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<IAuthReduxState>) {
            return action.payload
        },
        resetAuthData(){
            return initialState
        }
    }
})


export const { setAuthData,resetAuthData } = authSlice.actions



export const loadStoredAuthData = createAsyncThunk<void, void>(
    'loadStoredAuthData',

    async (payload,{dispatch}) =>{
        const localRawAuthData = localStorage.getItem('authData')
        const sessionRawAuthData = sessionStorage.getItem('authData')
        const rawAuthData = localRawAuthData || sessionRawAuthData
        if(rawAuthData){
            const authData: IAuthReduxState = JSON.parse(rawAuthData)
            setTokenToAxiosInstance(authData.token)
            dispatch(setAuthData(authData))
        }
    }

)




export const customerLoginAction = createAsyncThunk<void, {username: string,password: string}>(
    'customerLoginAction',
    async({username,password},{dispatch}) => {
        const response = await loginCustomer(username,password)
        const loginData= response.data
        dispatch(setAuthData(loginData))
    }

)


export const artistLoginAction = createAsyncThunk<void, {username: string,password: string,remember_me: boolean}>(
    'artistLoginAction',
    async({username,password,remember_me},{dispatch}) => {
        const response = await loginArtist(username,password)
        const loginData= response.data
        if(remember_me)
            localStorage.setItem('authData',JSON.stringify(loginData))
        else
            sessionStorage.setItem('authData',JSON.stringify(loginData))
        setTokenToAxiosInstance(loginData.token)
        dispatch(setAuthData(loginData))
    }

)

export const artistRegisterAction = createAsyncThunk<void, ICustomerRegisterParams>(
    'artistRegisterAction',
    async(data,{dispatch}) => {
        const response = await registerArtist(data)
        const registerData = response.data
        sessionStorage.setItem('authData',JSON.stringify(registerData))
        setTokenToAxiosInstance(registerData.token)
        dispatch(setAuthData(registerData))
    }

)

export const logoutAction = createAsyncThunk<void, void>(
    'logoutAction',

    async (payload, {dispatch}) => {
        logout().then(() => {
            removeTokenFromAxiosInstance()
            localStorage.removeItem('authData')
            sessionStorage.removeItem('authData')
            dispatch(resetAuthData())
        })
    }
)
