import { incerase, decrease } from "./Constantfile"

export function inceraseCounter(){
    return{
        type : incerase
    }
}

export function descreaseCounter(){
    return{
        type : decrease
    }
}