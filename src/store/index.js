import { createStore } from "redux"
import RootReducer from "../reducers"

export default function configStore(){
    const store = createStore(RootReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
        )
        return store;
}