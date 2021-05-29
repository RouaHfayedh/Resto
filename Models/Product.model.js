const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
    price: {
        type: String, 
    }
})

const Product = mongoose.model('Products', ProductSchema);

module.exports = Product;