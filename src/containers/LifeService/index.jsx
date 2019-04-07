import React from "react"

import BottomNav from "../../conponents/BottomNav"
import TopNav from "../../conponents/TopNav"
export default class LifeService extends React.Component {
    render (){
        return (
            <div>
                <TopNav />
                LifeService
                <BottomNav />
            </div>
        )
    }
}