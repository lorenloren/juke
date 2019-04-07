import React from "react"

import BottomNav from "../../conponents/BottomNav"
import TopNav from "../../conponents/TopNav"

export default class NotFound extends React.Component {
    render (){
        return (
            <div>
                <TopNav />
                NotFound
                <BottomNav />
            </div>
        )
    }
}