import * as ActionType from "../constants/city";

export function setCity(data){
    return{
        type:ActionType.SET_CITY,
        data
    }
}
export function updateCity(data){
    return{
        type:ActionType.UPDATE_CITY,
        data
    }
}