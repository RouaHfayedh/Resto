var express = require("express");
var app = express();
var  path=require("path");
const cors = require('cors')
const connectDB=require("./DB/Connection");
const commandApi=require("./Routes/Command.route");
const productApi=require("./Routes/Product.route");

const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(cors())
app.use('/command', commandApi)
app.use('/product', productApi)
connectDB();


app.get('/', function (req, res) {
    res.send('hello from server')
})

 app.listen(8000, function () {
    console.log("Running in 8000 !")
})