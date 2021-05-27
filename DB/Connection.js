const mongoose=require("mongoose");

const URI="mongodb+srv://safa:lSZBBVjSIwDGxMqe@cluster0.qth3c.mongodb.net/Resto?retryWrites=true&w=majority"
const connectDB = async ()=>{
    mongoose.connect(URI, { 
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useFindAndModify: true
        }).then(()=>{
        console.log("db connected ..")
    })
}

module.exports=connectDB;