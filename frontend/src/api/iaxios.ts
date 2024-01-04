import axios from 'axios';

const BASE_URL = 
    process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:8000/api'
    : 'https://customdomain.com'


export const iaxios = axios.create({
    baseURL: BASE_URL,
})