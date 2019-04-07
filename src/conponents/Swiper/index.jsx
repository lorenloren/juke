import React from "react"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from 'react-swipeable-views-utils';
import Fenye from "./fenye"
import "./style.less"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export default class Swiper extends React.Component {
    constructor(){
        super()
        this.state = {
            currentIndex:0
        }
    }
    handleChangeIndex(index){
        this.setState({
            currentIndex:index
        })
    }
    render() {
        const Banner = this.props.Banner        
        return (
            <div className="swiper">
                <AutoPlaySwipeableViews  onChangeIndex={this.handleChangeIndex.bind(this)}>
                    {
                        Banner.map((element,index)=>{
                            return (
                                <div className="swiper-view"  key= {index }>
                                    <img src={ element } alt=""/>
                                </div>
                            )
                        })
                    }
                </AutoPlaySwipeableViews>
                <Fenye currentIndex={ this.state.currentIndex } Banner={ Banner } />
            </div>

        )
    }
}
