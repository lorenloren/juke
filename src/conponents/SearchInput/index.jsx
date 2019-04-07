import React from "react"
import "./style.less"


export default class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            values:""
        }
    }
    onKeyUpHandler(event){
        if(event.keyCode===13){
            this.props.history.push("/search/"+this.state.values)
        }
    }
    inputValues(event){
        this.setState({
            values: event.target.value
        }) 
    }
    render() {
        return (
            <input 
            type="text"
            value={ this.state.values } 
            className="search-input" 
            onKeyUp={ this.onKeyUpHandler.bind(this) }
            onChange={ this.inputValues.bind(this) }
            />
        )
    }
}
