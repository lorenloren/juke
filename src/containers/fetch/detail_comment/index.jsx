import { httpGet } from "../../../utils/http"

export function DetailComment (id){
    const result = httpGet(`/api/comment?id=${id}`)
    return result;
}