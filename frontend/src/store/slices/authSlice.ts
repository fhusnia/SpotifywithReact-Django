import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginCustomer,loginArtist, ICustomerRegisterParams, registerArtist } from "../../api/authApi"


interface IInitialState {
    id: number
    token: string
    user_type: 'unauthorized' | 'customer' | 'artist'
    username: string
    first_name: string
    last_name: string
    email: string
}

const initialState = {
    id: 0,
    token: '',
    user_type: 'unauthorized',
    username: '',
    first_name: '',
    last_name: '',
    email: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<IInitialState>) {
            return action.payload
        }
    }
})


export const { setAuthData } = authSlice.actions

export const customerLoginAction = createAsyncThunk<void, {username: string,password: string}>(
    'customerLoginAction',
    async({username,password},{dispatch}) => {
        const response = await loginCustomer(username,password)
        const loginData= response.data
        dispatch(setAuthData(loginData))
    }

)


export const artistLoginAction = createAsyncThunk<void, {username: string,password: string}>(
    'artistLoginAction',
    async({username,password},{dispatch}) => {
        const response = await loginArtist(username,password)
        const loginData= response.data
        dispatch(setAuthData(loginData))
    }

)

export const artistRegisterAction = createAsyncThunk<void, ICustomerRegisterParams>(
    'artistRegisterAction',
    async(data,{dispatch}) => {
        const response = await registerArtist(data)
        const registerData = response.data
        dispatch(setAuthData(registerData))
    }

)
