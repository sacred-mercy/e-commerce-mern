const Product = require("../models/productModel");
const db = require("../config/db");

// Connect to database
db.connect();

// Get all products
const getAllProducts = async (req, res) => {
	const page = req.headers.page || 1;
	try {
		// get 10 products according to the page number
		const products = await Product.find()
			.limit(10)
			.skip((page - 1) * 10);
		const count = await Product.countDocuments();
		return (result = {
			status: 200,
			data: {
				products,
				count,
			},
		});
	} catch (error) {
		console.log(error);
		return (result = {
			status: 500,
			data: {
				message: "Internal server error",
			},
		});
	}
};

// Get a product by id
const getProductById = async (req, res) => {
	try {
		const product = await Product.findOne({ id: req.params.id });
		return (result = {
			status: 200,
			data: product,
		});
	} catch (error) {
		console.log(error);
		return (result = {
			status: 500,
			data: {
				message: "Internal server error",
			},
		});
	}
};

// Create a product
const createProduct = async (req, res) => {
	try {
		const product = new Product({
			id: req.body.id,
			title: req.body.title,
			description: req.body.description,
			price: req.body.price,
			discountPercentage: req.body.discountPercentage,
			rating: req.body.rating,
			stock: req.body.stock,
			brand: req.body.brand,
			category: req.body.category,
			thumbnail: req.body.thumbnail,
			images: req.body.images,
		});
		const savedProduct = await product.save();
		return (result = {
			status: 201,
			data: savedProduct,
		});
	} catch (error) {
		console.log(error);
		return (result = {
			status: 500,
			data: {
				message: "Internal server error",
			},
		});
	}
};

// Update a product
const updateProduct = async (req, res) => {
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
		return (result = {
			status: 200,
			data: savedProduct,
		});
	} catch (error) {
		console.log(error);
		return (result = {
			status: 500,
			data: {
				message: "Internal server error",
			},
		});
	}
};

// Delete a product
const deleteProduct = async (req, res) => {
	try {
		const deletedProduct = await Product.deleteOne({ id: req.params.id });
		return (result = {
			status: 200,
			data: deletedProduct,
		});
	} catch (error) {
		console.log(error);
		return (result = {
			status: 500,
			data: {
				message: "Internal server error",
			},
		});
	}
};

// Search products
const searchProducts = async (req, res) => {
	try {
		// find any document matching description or title or brand to the keyword
		const products = await Product.find({
			$or: [
				{ description: { $regex: req.params.keyword, $options: "i" } },
				{ title: { $regex: req.params.keyword, $options: "i" } },
				{ brand: { $regex: req.params.keyword, $options: "i" } },
			],
		});
		if (products.length === 0) {
			return (result = {
				status: 404,
				data: {
					message: "No products found",
				},
			});
		} else {
			return (result = {
				status: 200,
				data: products,
			});
		}
	} catch (error) {
		console.log(error);
		return (result = {
			status: 500,
			data: {
				message: "Internal server error",
			},
		});
	}
};

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
	searchProducts,
};
