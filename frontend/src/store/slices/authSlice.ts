import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCustomerLoginData } from "../../api/authApi"


interface IInitialState {
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

export const customerSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<IInitialState>) {
            return action.payload
        }
    }
})


export const { setAuthData } = customerSlice.actions

export const loginAction = createAsyncThunk<void, {username: string,password: string}>(
    'loginAction',
    async({username,password},{dispatch}) => {
        const response = await getCustomerLoginData(username,password)
        const loginData= response.data
        dispatch(setAuthData(loginData))
    }

)

