var express = require("express")
var app = express()
var Router = require("./router")

//post解决方式
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); 

app.use("/api",Router)
app.listen("3001",function(){
    console.log("3001")
})