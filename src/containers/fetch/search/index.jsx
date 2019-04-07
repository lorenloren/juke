import { httpGet } from "../../../utils/http"

export function getSearch (city,keyword,page){
    const result = httpGet(`/api/search?city=${city}&keyword=${keyword}&page=${page}`)
    return result;
}