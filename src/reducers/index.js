import { combineReducers } from "redux"

import city from "./city.js"
import userinfo from "./userinfo.js"
import collect from "./collect.js"

const rootReducer = combineReducers({
    city,
    userinfo,
    collect
})
export default rootReducer