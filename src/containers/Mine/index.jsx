import React from "react"

import BottomNav from "../../conponents/BottomNav"
import TopNav from "../../conponents/TopNav"

export default class Mine extends React.Component {
    render (){
        return (
            <div>
                <TopNav />
                Mine
                <BottomNav />
            </div>
        )
    }
}