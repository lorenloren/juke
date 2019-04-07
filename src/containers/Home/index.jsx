import React from "react"
//redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import BottomNav from "../../conponents/BottomNav"
import TopNav from "../../conponents/TopNav"
import Swiper from "../../conponents/Swiper"
import HomeComponent from "./subHome/index"

import Banner1 from "../../static/images/banner1.png"
import Banner2 from "../../static/images/banner2.png"
import Banner3 from "../../static/images/banner3.png"

class Home extends React.Component {
    render() {
        return (
            <div>
                <TopNav city={ this.props.city.cityName } history={ this.props.history }/>
                <Swiper Banner={[Banner1, Banner2, Banner3]} />
                <HomeComponent url={"/api/home1"} title={"新品热卖"} />
                <HomeComponent url={"/api/home2"} title={"家庭常用"} />
                <HomeComponent url={"/api/home1"} title={"新品热卖"} />
                <HomeComponent url={"/api/home2"} title={"家庭常用"} />
                <BottomNav />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        city:state.city
    }
}

export default withRouter(connect(
    mapStateToProps
)(Home))