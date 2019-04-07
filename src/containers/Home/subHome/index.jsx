import React from "react"
import { httpGet } from "../../../utils/http"
import HomeView from "../../../conponents/HomeView/index"

export default class HomeComponent extends React.Component {

    constructor(){
        super()
        this.state = {
            homeData:[]
        }
    }
    componentDidMount() {
        const home1 = this.props.url
        httpGet(home1)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    homeData:data
                })
            })
    }

    render() {
        const homedata = this.state.homeData
        return (
            homedata.length > 0 
            ?
            <HomeView homedata={ homedata } title={ this.props.title }></HomeView>
            :
            <div>数据正在加载中.......</div>
        )
    }
}