import React from "react"
import "./style.less"
export default class BottomNav extends React.Component {
    render (){
        const homedata = this.props.homedata
        return (
            <div className ="hotproduct">
                <h3>{ this.props.title }</h3>
                <div className="hot-container">
                    <ul className="clear-fix">
                        {
                            homedata.map((element,index) => {
                                return (
                                    <li key={ element.id }>
                                        <a href={ element.link }>
                                            <img src={ element.img } alt={ element.title } />
                                            <span>{ element.title }</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}