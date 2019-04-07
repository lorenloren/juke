import * as ActionTypeCollect from "../constants/collect"

export default function collect(state=[],action){
    switch(action.type){
        case ActionTypeCollect.COLLECT:
            state.push(action.data)
            return state;
        case ActionTypeCollect.UN_COLLECT:
            return  state.filter((item) => {
                // 通过id判断两条数据是否相同：用户要删除数据的id，便利state中所有数据的id做对比
                if(item.id !== action.data.id){
                    return item
                }
            });
        default:
            return state;
    }
}