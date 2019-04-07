import React from "react"

import "./style.less"

export default class Fenye extends React.Component {
    render (){
        const Banner = this.props.Banner
        return (
            <div className="swiper-pagination">
                {
                    Banner.map((element, index) => {
                        return <li key = { index } className={ this.props.currentIndex === index ? "selected" : "" }></li>
                    })
                }
            </div>
        )
    }
}