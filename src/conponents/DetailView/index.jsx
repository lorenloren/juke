import React from "react"
import Swiper from "../Swiper"
import Tabs from "../Tabs"
import CommentInfo from "../../containers/Detail/subpage/commentInfo"
import DetailButton from "../../containers/Detail/subpage/storebuy"

import "./style.less"

export default class DetailView extends React.Component {
    render() {
        const Banner = this.props.data.imgs;
        const data = this.props.data;
        const id = this.props.id
        return (
            <div className="detail-info">
                <Swiper Banner={Banner} />
                <Tabs>
                    <div tabName="房源信息">
                        <h3>{data.title}</h3>
                        <div className="box">
                            <ul>
                                <li>
                                    <span>{data.price}/月</span>
                                    <p>租金</p>
                                </li>
                                <li>
                                    <span>{data.info.type}/月</span>
                                    <p>房型</p>
                                </li>
                                <li>
                                    <span>{data.houseType}</span>
                                    <p>面积</p>
                                </li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="info-list">
                                <p>楼层：{data.info.level}</p>
                                <p>装修：{data.info.style}</p>
                            </div>
                            <div className="info-list">
                                <p>类型：{data.info.type}</p>
                                <p>朝向：{data.info.orientation}</p>
                            </div>
                            <div className="info-list">
                                <p>年代：{data.info.years}</p>
                            </div>
                        </div>
                        <DetailButton history={ this.props.history } id={ id }/>
                    </div>
                    <div tabName="房源评价">
                        <CommentInfo id={ id } />
                    </div>
                </Tabs>
            </div>
        )
    }
}