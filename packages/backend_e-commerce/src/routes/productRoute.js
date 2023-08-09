const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const db = require("../config/db");

// Connect to database
db.connect();

// Get all products
router.get("/", async (req, res) => {
    const page = req.query.page || 1;
	try {
        // get 10 products according to the page number
		const products = await Product.find().limit(10).skip((page - 1) * 10);
        const count = await Product.countDocuments();
        res.json({
            products,
            count
        });
	} catch (error) {
		console.log(error);
	}
});

// Get a product by id
router.get("/:id", async (req, res) => {
	try {
		const product = await Product.findOne({ id: req.params.id });
		res.json(product);
	} catch (error) {
		console.log(error);
	}
});

// Create a product
router.post("/", async (req, res) => {
    try {
        const product = new Product({
            id : req.body.id,
            title : req.body.title,
            description : req.body.description,
            price : req.body.price,
            discountPercentage : req.body.discountPercentage,
            rating : req.body.rating,
            stock : req.body.stock,
            brand : req.body.brand,
            category : req.body.category,
            thumbnail : req.body.thumbnail,
            images : req.body.images,
        });
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        console.log(error);
    }
});

// Update a product
router.put("/:id", async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        product.id = req.body.id;
        product.title = req.body.title;
        product.description = req.body.description;
        product.price = req.body.price;
        product.discountPercentage = req.body.discountPercentage;
        product.rating = req.body.rating;
        product.stock = req.body.stock;
        product.brand = req.body.brand;
        product.category = req.body.category;
        product.thumbnail = req.body.thumbnail;
        product.images = req.body.images;
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        console.log(error);
    }
});


// Delete a product
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        const deletedProduct = await product.delete();
        res.json(deletedProduct);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
