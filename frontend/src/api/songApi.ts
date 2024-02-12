import  iaxios  from "./iaxios"
import type { IGenre } from "../types"

export function getGenreList(){
    return iaxios.get<IGenre[]>('/genres/')
}