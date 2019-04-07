import React from "react"
import { BrowserRouter } from "react-router-dom"
//一级路由
import App from "../containers/App"
//二级路由导入
import SubRouter from "./subRouter"

export default class AppRouter extends React.Component {
    render (){
        return (
            <BrowserRouter>
                <App>
                    <SubRouter />
                </App>
            </BrowserRouter>
        )
    }
}