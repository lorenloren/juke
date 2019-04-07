import React from "react"

import BottomNav from "../../conponents/BottomNav"
import TopNav from "../../conponents/TopNav"

export default class Shop extends React.Component {
    render (){
        return (
            <div>
                <TopNav />
                Shop
                <BottomNav />
            </div>
        )
    }
}