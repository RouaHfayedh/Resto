const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const CommandSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    date: {
        type: String,
    },
    time: {
        type: String, 
    },
    prefferedFood: {
        type: String,
    },
    occasion: {
        type: String,
    }
})

const Command = mongoose.model('Commands', CommandSchema);

module.exports = Command;