const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");
const db = require("../config/db");

// Connect to database
db.connect();

// sign up
router.post("/signup", async (req, res) => {
	const { name, email, password } = req.body;
	const result = await user.signIn(name, email, password);
	res.status(result.status).json(result.data);
});

// login
router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const result = await user.login(email, password);
	res.status(result.status).json(result.data);
});

module.exports = router;
