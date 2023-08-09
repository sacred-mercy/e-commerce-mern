const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id : { type: Number, required: true, unique: true },
    title : { type: String, required: true },
    description : { type: String, required: true },
    price : { type: Number, required: true, min : 1 },
    discountPercentage : { type: Number, required: true },
    rating : { type: Number, required: true },
    stock : { type: Number, required: true , min : 1},
    brand : { type: String, required: true },
    category : { type: String, required: true },
    thumbnail : { type: String, required: true },
    images : { type: Array, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;