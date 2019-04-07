import React from "react"
import CarHeader from "../../conponents/Header"
import UserInfo from "../../conponents/UserInfo"
import Order from "./subpage"

import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

class shopcar extends React.Component{
    componentDidMount(){
        if(this.props.userinfo.uname){
            //允许
        }else{
            this.props.history.push("/login")
        }
    }
    render(){
        return(
            <div>
                <CarHeader title="购物车" />
                <UserInfo username={ this.props.userinfo.uname } city={ this.props.city.cityName }/>
                <Order username={ this.props.userinfo.uname }/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        userinfo:state.userinfo,
        city:state.city
    }
}
export default withRouter (connect(
    mapStateToProps
)(shopcar))