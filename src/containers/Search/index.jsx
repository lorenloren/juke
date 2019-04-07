import React from "react"
import SearchHead from "../../conponents/SearchHead"
import SearchList from "./SearchList"
export default class Search extends React.Component {
    render() {
        return (
            <div>
                <SearchHead history={this.props.history}/>
                <SearchList  keyword={this.props.match.params.keyword}/>
            </div>
        )
    }
}