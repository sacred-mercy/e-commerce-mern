const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const JWT = require("../middlewares/JWT");
const db = require("../config/db");

// Connect to database
db.connect();

// sign up
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({ name, email, password });
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: JWT.generateToken(user),
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// login
router.post("/login", JWT.authenticateToken, async (req, res) => {
    res.send("Login");
});
    


module.exports = router;
