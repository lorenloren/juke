import React from "react"
import { getOrderData } from "../../fetch/order/index"
import OrderView from "../../../conponents/Order"

export default class Order extends React.Component {
    constructor(){
        super()
        this.state ={
            orderData:[]
        }
    }
    componentDidMount(){
        const user =this.props.username
        console.log(user)
        getOrderData(user)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                orderData:data
            })
        })
    }
    render (){
        return (
            <div>
                {
                   this.state.orderData.length >0 ?
                    <OrderView data={ this.state.orderData }/> :
                   <div>order加载中....</div>
                }
            </div>
        )
    }
}