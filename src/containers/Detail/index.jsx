import React from "react"
import Header from "../../conponents/Header"
import DetailInfo from "./subpage/detailInfo"

export default class Detail extends React.Component {
    render (){
        return (
            <div>
                <Header title={ "详情页" } history={ this.props.history }/>
                <DetailInfo id={ this.props.match.params.id }  history={ this.props.history }/>
            </div>
        )
    }
}
