const express = require("express");
const router = express.Router();
const product = require("../controllers/productController");

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

// route for searching products
router.route("/search/:keyword").get(async (req, res) => {
    if (req.params.keyword.trim() === "") {
        return res.status(400).json({
            message: "Bad request",
        });
    }
    const result = await product.searchProducts(req, res);
    res.status(result.status).json(result.data);
});

module.exports = router;
