import * as ActionType from "../constants/username"

export function setLogin(data){
    return{
        type:ActionType.USER_LOGIN,
        data
    }
}
export function reLogin(data){
    return{
        type:ActionType.USER_RELOGIN,
        data
    }
}