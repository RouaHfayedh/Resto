const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Command=require('../Models/Command.model');

//for json
var jsonParser = bodyParser.json();
//for urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
    res.send('From API route command')
  })

//getting all commands
router.get('/list', urlencodedParser ,async (req,res,next)=>{
    console.log("result")

    try{
        const results = await Command.find()
        res.send(results)
        console.log("result",results)
    }catch(error){
        console.log("error",error.message);
    }
    //res.send('getting a list of all commands ...');
});

//add new command
router.post('/add', urlencodedParser,(req,res,next)=>{
    console.log('hello',req.body);
    const command= new Command({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time,
        prefferedFood: req.body.prefferedFood,
        occasion: req.body.occasion
    });
    console.log(req.body.prefferedFood)
    command.save().then((result)=>{
        console.log("hi");
        res.send(result);
    })
    .catch(err=>{
        console.log(err.message);
    })
})

router.get('/:id',jsonParser, async(req,res,next)=>{
    const id = req.params.id;
    try{
        const command= await Command.findById(id);
        res.send(command);
    }catch(error){
        console.log(error.message);
    }
})

router.patch('/:id',urlencodedParser ,async (req,res,next)=>{
    
    try{
        const id=req.params.id
        const updates = req.body
        const options = {new: true};
        const result = await Command.findByIdAndUpdate(id, updates, options);
        res.send(result);

    }catch(error){
        console.log(error.message);
    }
})

router.delete('/remove',urlencodedParser,async (req,res,next)=>{
    const id= req.query.id
    try{
        const result = await Command.findByIdAndDelete(id);
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
})

module.exports= router;