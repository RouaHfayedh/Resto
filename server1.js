const express = require("express");
const mongoose= require("mongoose");
const connectDB=require("./DB/Connection");
const bodyParser = require('body-parser');
const cmdRouter=require('./Routes/Command.route');
const routerP=require('./Routes/Product.route.js');


const app=express();

//for json
var jsonParser = bodyParser.json();
//for urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })
connectDB();

app.all('/test',jsonParser,(req,res)=>{
    /* console.log(req.params);
    res.send(req.params); */
    console.log(req.body);
    res.send(req.body);
})
app.use('/Commands',cmdRouter);

app.use('/products',routerP);

app.post('/testing',jsonParser,(req,res)=>{
    if(req.body != undefined){
        console.log('message received');
        res.send(req.body.message);
    }else {
        console.log("no message");
    }
})

/* const CommandRoute = require('./Routes/Command.route');
app.use('/commands' , CommandRoute); */

app.listen(8000, function () {
    console.log("Running in 8000 !")
})