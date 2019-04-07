import React from "react"
import StoreBuyView from "../../../conponents/DetailButtonView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as collectActions from "../../../actions/collect.js"

import { PostBuyGoods } from "../../fetch/buygoods/index"

class StoreBuy extends React.Component {
    constructor(){
        super()
        this.state ={
            collectyState:false
        }
    }

    componentDidMount() {
        // 判断是否收藏
        this.setState({
            currentCollect: this.isCollected()
        })
    }
    //收藏未收藏判断
    collectHandler(){
        //判断是否登录
        if(this.isLogined()){
            //判断是否收藏
            if(this.isCollected()){
                //如果收藏 点击取消收藏 删除传入的id值
                this.props.collectActions.unCollect({
                    id: this.props.id
                })
                this.setState({
                    currentCollect: false
                })
            }else{
                //如果没有收藏 点击收藏 传入id值
                this.props.collectActions.collect({
                    id: this.props.id
                })
                this.setState({
                    currentCollect: true
                })
            }
        }else{
            this.props.history.push("/login")
        }
    }
    // 判断登陆
    isLogined() {
        if (!this.props.userinfo.uname) {
            return false;
        }
        return true;
    }
    
    // 判断是否收藏
    isCollected() {
        const id = this.props.id;
        const collects = this.props.collect;
        // some
        return collects.some((element) => {
            return element.id === id;
        })
    }
    //购买
    buyHandler(){
        const id = this.props.id;
        PostBuyGoods(id)
        .then(res => res.json())
        .then(data => {
            alert(data.msg)
        })
    }
    render() {
        return (
            // currentCollect 传递状态
            //onStoreEvent 收藏功能  点击事件
            <div>
                <StoreBuyView 
                    currentCollect={this.state.currentCollect}
                    onStoreEvent={this.collectHandler.bind(this)}
                    onBuyEvent={this.buyHandler.bind(this)}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        collect: state.collect,
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        collectActions: bindActionCreators(collectActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreBuy)