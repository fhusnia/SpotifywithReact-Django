import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCustomerLoginData,getArtistLoginData } from "../../api/authApi"


interface IInitialState {
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
    user_type: 'unchecked',
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    image: '',
}

export const authSlice = createSlice({
    name: 'customer',
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
        const response = await getCustomerLoginData(username,password)
        const loginData= response.data
        dispatch(setAuthData(loginData))
    }

)


export const artistLoginAction = createAsyncThunk<void, {username: string,password: string}>(
    'artistLoginAction',
    async({username,password},{dispatch}) => {
        const response = await getArtistLoginData(username,password)
        const loginData= response.data
        dispatch(setAuthData(loginData))
    }

)
