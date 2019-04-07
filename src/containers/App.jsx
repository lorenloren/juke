import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as ActionsCity from "../actions/index"
import { withRouter } from "react-router-dom"



class App extends React.Component {
    componentDidMount(){
        this.props.ActionsCity.setCity({
            cityName:"邢台"
        })
    }
    render (){
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}
//读写操作
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

)(App))