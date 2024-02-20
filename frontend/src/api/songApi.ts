import  iaxios  from "./iaxios"
import type { IGenre } from "../types"

export function getGenreList(){
    return iaxios.get<IGenre[]>('/genres/')
}

interface createSongData{
    title: string
    genre:number
    description: string
    duration: string
    image: File
    artists:string
    file: File
}

export function createSong(data: createSongData){
    const formData = new FormData()
    for (let[key,value] of Object.entries(data)){
        formData.append(key,value)
    }
    return iaxios.post('./songs/',data,{
        headers: {'Content-Type': 'multipart/form-data'}
    })
}