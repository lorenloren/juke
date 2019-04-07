var express = require("express")
var url = require('url')
var Router = express.Router()
var home1 = require("./data/home/homehot1")
var home2 = require("./data/home/homehot2")
var search = require("./data/search/index")
var detail = require("./data/detail/index")
var comment = require("./data/comment/index")
var orderData = require("./data/order/index.js") ;

//首页接口
Router.get("/home1",function(req,res){
    res.send(home1)
})
Router.get("/home2",function(req,res){
    res.send(home2)
})
// 搜索页面
Router.get("/search",function(req,res){
    res.send(search)
})
// 详情页
Router.get("/detail",function(req,res){
    res.send(detail)
})
// 评论数据接口
Router.get("/comment",function(req,res){
    res.send(comment)
})
//购买接口
Router.post("/buygoods",function(req,res){
    var id = req.body.id;
    console.log(id)
    if(id){
        res.send({
            msg:'商品订单正在出库，请货到付款',
            id:id
        })
    }else{
        res.send({
            msg:'所选商品有问题，请重新下单'
        })
    }
})
//购物车
Router.get("/shopcar",function(req,res){
    var user = url.parse(req.url, true).query.user;
    console.log(user);
    res.send(orderData);
})

Router.post("/comment",function(req,res){
    var commentData = req.body.comment;
    console.log(commentData);
    res.send({
        msg:'评价成功'
    })
})
module.exports = Router