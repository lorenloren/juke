import * as ActionType from "../constants/username"

export default function username(state={},action){
    switch(action.type){
        case ActionType.USER_LOGIN:
            return state = action.data;
        case ActionType.USER_RELOGIN:
            return state = action.data;
        default:
            return state;
    }
}