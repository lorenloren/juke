import React from "react"
import { DetailComment } from "../../fetch/detail_comment/index"
import CommentView from "../../../conponents/CommentView"
import LoadMore from "../../../conponents/LoadMore"

export default class CommentInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            commentData: [],
            hasMore: false
        }
    }
    componentDidMount() {
        const id = this.props.id
        this.http(id)
        // console.log(id)
    }
    http(id) {
        const result = DetailComment(id)
        result.then(res => res.json())
            .then(data => {
                this.setState({
                    commentData: this.state.commentData.concat(data.data),
                    hasMore: data.hasMore
                })
                console.log();
            })
    }

    LoadMoreHandler() {
        const id = this.props.id
        this.http(id)
    }
    render() {
        return (
            <div>
                {
                    this.state.hasMore == true ?
                        <CommentView data={this.state.commentData} /> :
                        <div>正在加载数据...</div>
                }
                {
                    this.state.hasMore == true ?
                        <LoadMore onJiaZai={this.LoadMoreHandler.bind(this)} /> :
                        <div>被你看光了...</div>
                }
            </div>
        )
    }
}