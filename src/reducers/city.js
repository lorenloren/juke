import * as ActionType from "../constants/city";
export default function RedCity (state={},action){
    switch(action.type){
        case ActionType.SET_CITY:
            return state = action.data;
        case ActionType.UPDATE_CITY:
            return state = action.data;
        default:
            return state;
    }
}