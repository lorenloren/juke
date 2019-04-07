import { httpPost } from "../../../utils/http"

export function PostBuyGoods (id){
    const result = httpPost("/api/buygoods",{
        id:id
    })
    return result;
}