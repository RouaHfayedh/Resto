const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Product=require('../Models/Product.model');

//for json
var jsonParser = bodyParser.json();
//for urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/list', urlencodedParser ,async (req,res,next)=>{
    try{
        const results = await Product.find()
        res.send(results)
        //console.log(results)
    }catch(error){
        console.log(error.message);
    }
    //res.send('getting a list of all commands ...');
});

router.post('/add', urlencodedParser,(req,res,next)=>{
    const product= new Product({
        name: req.body.name,
        description: req.body.description,
        img : req.body.img,
        price: req.body.price
    });
    product.save().then((result)=>{
        res.send(result);
    })
    .catch(err=>{
        console.log(err.message);
    })
})

router.get('/:id',jsonParser, async(req,res,next)=>{
    const id = req.params.id;
    try{
        const product= await Product.findById(id);
        res.send(product);
    }catch(error){
        console.log(error.message);
    }
})

router.patch('/update/:id',urlencodedParser ,async (req,res,next)=>{
    
    try{
        const id=req.params.id
        const updates = req.body
        const options = {new: true};
        const result = await Product.findByIdAndUpdate(id, updates, options);
        res.send(result);

    }catch(error){
        console.log(error.message);
    }
})

router.delete('/delete/:id',urlencodedParser,async (req,res,next)=>{
    const id= req.params.id
    try{
        const result = await Product.findByIdAndDelete(id);
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
})

module.exports= router;