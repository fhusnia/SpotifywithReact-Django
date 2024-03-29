import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginCustomer,loginArtist,registerCustomer,IArtistRegisterParams, ICustomerRegisterParams, registerArtist, logout } from "../../api/authApi"
import { setTokenToAxiosInstance,removeTokenFromAxiosInstance } from "../../api/iaxios"
import { setNotf } from "./notfSlice"


interface IAuthReduxState {
    id: number
    token: string
    user_type: 'unchecked' | 'unauthorized' | 'customer' | 'artist'
    username: string
    first_name: string
    last_name: string
    email: string
    image: string
}

const initialState = {
    id: 0,
    token: '',
    user_type: 'unchecked',
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
        } ,
        setLogout() {
            const state = {...initialState, user_type: 'unauthorized'}
            return state
        }
    }
})


export const { setAuthData,resetAuthData,setLogout } = authSlice.actions

export default authSlice

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
        }else {
            dispatch(setAuthData({...initialState, user_type: 'unauthorized'}))
        }
    }

)





export const artistLoginAction = createAsyncThunk<void, {username: string,password: string,rememberMe: boolean}>(
    'artistLoginAction',
    async({username,password,rememberMe},{dispatch}) => {
        try {
            const response = await loginArtist(username, password)
            const loginData = response.data
            if (rememberMe)
                localStorage.setItem('authData', JSON.stringify(loginData))
            else
                sessionStorage.setItem('authData', JSON.stringify(loginData))
            setTokenToAxiosInstance(loginData.token)
            dispatch(setAuthData(loginData))
            dispatch(setNotf({message: 'Login Successfully!'}))
        } catch (error: any) {
            dispatch(setNotf({message: error.response.data.detail, color: 'error'}))
        }
    }

)






export const artistRegisterAction = createAsyncThunk<void, IArtistRegisterParams>(
    'artistRegisterAction',
    async(data,{dispatch}) => {
        const response = await registerArtist(data)
        const registerData = response.data
        sessionStorage.setItem('authData',JSON.stringify(registerData))
        setTokenToAxiosInstance(registerData.token)
        dispatch(setAuthData(registerData))
        dispatch(setNotf({message: 'You have registered successfully!'}))
    }

)




export const customerLoginAction = createAsyncThunk<void, {username: string,password: string,rememberMe: boolean}>(
    'customerLoginAction',
    async({username,password,rememberMe},{dispatch}) => {
        try {
            const response = await loginCustomer(username, password)
            const loginData = response.data
            if (rememberMe)
                localStorage.setItem('authData', JSON.stringify(loginData))
            else
                sessionStorage.setItem('authData', JSON.stringify(loginData))
            setTokenToAxiosInstance(loginData.token)
            dispatch(setAuthData(loginData))
            dispatch(setNotf({message: 'Login Successfully!'}))
        } catch (error: any) {
            dispatch(setNotf({message: error.response.data.detail, color: 'error'}))
        }
    }

)




export const customerRegisterAction = createAsyncThunk<void, ICustomerRegisterParams>(
    'customerRegisterAction',
    async(data,{dispatch}) => {
        const response = await registerCustomer(data)
        const registerData = response.data
        sessionStorage.setItem('authData',JSON.stringify(registerData))
        setTokenToAxiosInstance(registerData.token)
        dispatch(setAuthData(registerData))
        dispatch(setNotf({message: 'You have registered successfully!'}))
    }
)


export const logoutAction = createAsyncThunk<void, void>(
    'logoutAction',

    async (payload, {dispatch}) => {
        logout().then(() => {
            removeTokenFromAxiosInstance()
            localStorage.removeItem('authData')
            sessionStorage.removeItem('authData')
            dispatch(setLogout())
        })
    }
)
export const changeAuthData = createAsyncThunk<void, IAuthReduxState>(
    'changeAuthData',
    async (payload, {dispatch}) => {
        dispatch(setAuthData(payload))
        const jsonData = JSON.stringify(payload)
        if (localStorage.getItem('authData'))
            localStorage.setItem('authData', jsonData)
        else
            sessionStorage.setItem('authData', jsonData)
    }
)