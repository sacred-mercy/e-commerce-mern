const User = require("../models/userModel.js");
const JWT = require("jsonwebtoken");
const db = require("../config/db");
require("dotenv").config();

// Connect to database
db.connect();

const signIn = async (name, email, password) => {
	try {
		const user = await User.create({ name, email, password });
		return (result = {
			status: 200,
			data: user,
		});
	} catch (error) {
		return (result = {
			status: 500,
			data: {
				message: "Internal server error",
			},
		});
	}
};

const login = async (email, password) => {
	try {
		const user = await User.findOne({ email });
		console.log(user);
		if (user && password === user.password) {
			const token = JWT.sign(
				{
					id: user._id,
					name: user.name,
					email: user.email,
				},
				process.env.JWT_SECRET,
				{
					expiresIn: "30d",
				}
			);
			return (result = {
				status: 200,
				data: {
					user: {
						name: user.name,
						email: user.email,
					},
					token,
				},
			});
		}
		return (result = {
			status: 401,
			data: {
				message: "Invalid credentials",
			},
		});
	} catch (error) {
		return (result = {
			status: 500,
			data: {
				message: "Internal server error",
			},
		});
	}
};

const authenticateToken = (req, res, next) => {};

// export all functions
module.exports = {
	signIn,
	login,
	authenticateToken,
};