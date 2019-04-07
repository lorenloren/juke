import * as ActionType from "../constants/collect"

export function collect(data){
    return{
        type:ActionType.COLLECT,
        data
    }
}
export function unCollect(data){
    return{
        type:ActionType.UN_COLLECT,
        data
    }
}