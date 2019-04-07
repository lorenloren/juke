import React from "react"
//组件引用
import Header from "../../conponents/Header"
import CurrentCity from "../../conponents/CurrentCity"
import CityList from "../../conponents/CityList"

//redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"
import * as ActionsCity from "../../actions"

class City extends React.Component {
    chuanCan(data){
        this.props.ActionsCity.updateCity({
            cityName:data
        })
        this.props.history.replace("/")
    }
    render() {
        return (
            <div>
                <Header title={ "城市选择" } history={ this.props.history }/>
                <CurrentCity city={ this.props.city.cityName }/>
                <CityList chuanCan={ this.chuanCan.bind(this) }/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        city:state.city
    }
}
function mapDispatchToProps(dispatch){
    return{
        ActionsCity:bindActionCreators(ActionsCity,dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(City))