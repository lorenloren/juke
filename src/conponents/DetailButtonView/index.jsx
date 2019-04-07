import React from "react"

import "./style.less"


export default class LoginView extends React.Component {
    //点击购买
    buyHandler(){
        this.props.onBuyEvent();
    }
    //点击收藏 触发函数
    collectHandler(){
        this.props.onStoreEvent();
    }
    render() {
        const currentCollect = this.props.currentCollect
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        currentCollect ?
                            <button onClick={this.collectHandler.bind(this)} className="selected o">已收藏</button>
                            :
                            <button onClick={this.collectHandler.bind(this)} className="selected">收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyHandler.bind(this)}>购买</button>
                </div>
            </div>
        )
    }
}