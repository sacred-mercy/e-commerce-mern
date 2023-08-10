const express = require("express");
const router = express.Router();
const product = require("../controllers/productController");

// Get all products
router
    .route("/")
    .get(async (req, res) => {
        const result = await product.getAllProducts(req, res);
        res.status(result.status).json(result.data);
    })
    .post(async (req, res) => {
        const result = await product.createProduct(req, res);
        res.status(result.status).json(result.data);
    });

// Get a product by id, Update a product, Delete a product
router
    .route("/:id")
    .get(async (req, res) => {
        const result = await product.getProductById(req, res);
        res.status(result.status).json(result.data);
    })
    .put(async (req, res) => {
        const result = await product.updateProduct(req, res);
        res.status(result.status).json(result.data);
    })
    .delete(async (req, res) => {
        const result = await product.deleteProduct(req, res);
        res.status(result.status).json(result.data);
    });

module.exports = router;
