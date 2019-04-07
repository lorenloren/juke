import React from "react"
import { Route,Switch } from "react-router-dom"

//二级路由
import Home from "../containers/Home"
import LifeService from "../containers/LifeService"
import Mine from "../containers/Mine"
import Shop from "../containers/Shop"
import City from "../containers/City"
import Search from "../containers/Search"
import NotFound from "../containers/NotFound"
import Detail from "../containers/Detail"
import Login from "../containers/Login"
import ShopCar from "../containers/Shopcar"

export default class subRouter extends React.Component {
    render (){
        return (
            <Switch>
                <Route exact path="/" component = { Home }></Route>
                <Route path="/lifeservice" component = { LifeService }></Route>
                <Route path="/mine" component = { Mine }></Route>
                <Route path="/shop" component = { Shop }></Route>
                <Route path="/city" component = { City }></Route>
                <Route path="/search/:keyword" component = { Search }></Route>
                <Route path="/detail/:id" component = { Detail }></Route>
                <Route path="/login" component = { Login }></Route>
                <Route path="/shopcar" component = { ShopCar }></Route>
                <Route path="*" component = { NotFound }></Route>
            </Switch>
        )
    }
}