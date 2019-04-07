import React from "react"
import { getSearch } from "../../fetch/search"
import SearchListView from "../../../conponents/SearchListView"
import LoadMore from "../../../conponents/LoadMore"


export default class SearchList extends React.Component {
    constructor(){
        super()
        this.state = {
            ListData:[],
            page:0,
            hasmroe:false
        }
    }
    componentDidMount(){
        const city = this.props.city||"上海";
        const keyword = this.props.keyword ||"default"
        let page = this.state.page
        this.http(city,keyword,page)
    }
    http(city,keyword,page){
        getSearch(city,keyword,page)
        .then(res => res.json())
        .then(data => {
            this.setState({
                ListData:this.state.ListData.concat(data.data),
                page:this.state.page += 1,
                hasmroe:data.hasMore
            })
            // console.log(this.state.ListData)  
        })
    }
    componentDidUpdate(prevProps, prevState) {
        const city = this.props.city || 'shanghai'
        const keyword = this.props.keyword || 'default';
        // 如果上一次的props和这一次props相同，说明两次搜索的内容一样，就不再次请求
        if (prevProps.keyword !== keyword) {
            this.http(city, keyword, 0);
        }
    }
    LoadMoreHandler(){
        const city = this.props.city||"上海";
        const keyword = this.props.keyword ||"default"
        let page = this.state.page
        this.http(city,keyword,page)
    }
    render (){
        return (
            <div>
                {
                    this.state.ListData.length >0  ?
                    <SearchListView data={ this.state.ListData }/> :
                    <div>数据正在加载中。。。。。。</div>
                }
                {
                    this.state.hasmroe == true ?
                    <LoadMore onJiaZai={ this.LoadMoreHandler.bind(this) }/> :
                    <div>被你看光了...</div>
                }
            </div>
        )
    }
}