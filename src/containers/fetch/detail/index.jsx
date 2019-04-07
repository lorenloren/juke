import { httpGet } from "../../../utils/http"

export function getDetail (id){
    const result = httpGet(`/api/detail?id=${id}`)
    return result;
}