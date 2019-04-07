import React from "react"
import "./style.less"

export default class Tabs extends React.Component{
    constructor(){
        super()
        this.state = {
            currentIndex:0
        }
    }
    //点击切换  currentIndex 用来储存显示的状态值
    changeTabsHandler(index){
        // console.log(index);
        this.setState({
            currentIndex:index
        })
    }
    //点击切换内容 （隐藏/显示）
    contentChange(index){
        return index === this.state.currentIndex ?  "show" : "Tab_item"
    }
    //处理 title 高亮效果
    Highlight(index){
        return index === this.state.currentIndex ?  "Tab_title active"  : "Tab_title"
    }

    render(){
        const _this = this
        return(
            <div>
                <div  className="Tab_title_wrap">
                    {
                        React.Children.map(this.props.children, function (element, index) {
                            return(
                                <div className={ _this.Highlight(index) } onClick={ _this.changeTabsHandler.bind(_this,index) }>
                                    { element.props.tabName }
                                </div>
                            )
                        })
                    }
                </div>
                <div  className="Tab_item_wrap">
                    {
                        React.Children.map(this.props.children, function (element, index) {
                            return(
                                <div className={ _this.contentChange(index) }>
                                    { element.props.children }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}