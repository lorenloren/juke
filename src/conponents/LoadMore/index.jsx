import React from "react"

import "./style.less"

export default class LoadMore extends React.Component {
    
    componentDidMount(){
        //视口高度
        const winheight = document.documentElement.clientHeight;
        const wrapper = this.refs.wrapper;
        var times = null;
        var _this = this;

        function callback(){
            //相对高度
            const top = wrapper.getBoundingClientRect().top;
            if(top <= winheight){
                _this.props.onJiaZai();
            }
        }
        
        window.addEventListener("scroll",function(event){
            //延时器没有执行完毕 不会再次执行
            if(times){
                clearTimeout(times)
            }
            times = setTimeout(function(){
                callback();
            },300)
        })
    }
    render(){
        return (
            <div ref="wrapper">
                数据正在加载......
            </div>
        )
    }
}