import React from "react"
import { getDetail } from "../../fetch/detail"
import DetailView from "../../../conponents/DetailView"

export default class DetailInfo extends React.Component {
    constructor(){
        super()
        this.state = {
            detailData:{}
        }
    }
    componentDidMount(){
        var id = this.props.id
        const result = getDetail(id)
        result.then(res => res.json())
        .then(data => {
            this.setState({
                detailData:data
            })
            // console.log(data)
        })
    }
    render (){
        return (
            <div>
                {
                    this.state.detailData.imgs ?
                    <DetailView data={ this.state.detailData } id={ this.props.id } history={ this.props.history }/> :
                    <div>正在加载中......</div>
                }
            </div>
        )
    }
}