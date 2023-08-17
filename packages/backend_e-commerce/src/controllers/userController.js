const User = require("../models/userModel.js");
const JWT = require("jsonwebtoken");
const jwtMiddleware = require("../middlewares/JWT");
const db = require("../config/db");
require("dotenv").config();

// Connect to database
db.connect();

const signIn = async (name, email, password) => {
	try {
		const user = await User.create({ name, email, password });
		return (result = {
			status: 200,
			data: {
				message: "User created successfully please login to continue",
			},
		});
	} catch (error) {
		return (result = {
			status: 500,
			data: {
				message:
					error.code === 11000
						? "Email already exists"
						: "Internal server error",
			},
		});
	}
};

const login = async (email, password) => {
	try {
		const user = await User.findOne({ email });
		if (user && password === user.password) {
			const token = jwtMiddleware.generateToken(user);
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
		} else {
			return (result = {
				status: 401,
				data: {
					message: "Invalid credentials",
				},
			});
		}
	} catch (error) {
		return (result = {
			status: 500,
			data: {
				message: "Internal server error",
			},
		});
	}
};

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	if (!token) {
		return res.status(401).json({
			message: "Unauthorized",
		});
	}
	JWT.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) {
			return res.status(403).json({
				message: "Forbidden",
			});
		}
		req.user = user;
		next();
	});
};

// export all functions
module.exports = {
	signIn,
	login,
	authenticateToken,
};
