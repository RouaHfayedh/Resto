var express = require("express");
var app = express();
var  path=require("path");
const connectDB=require("./DB/Connection");



app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('images'));


app.get('/', function (req, res) {
    res.render('index');
 })

 app.listen(8000, function () {
    console.log("Running in 8000 !")
})