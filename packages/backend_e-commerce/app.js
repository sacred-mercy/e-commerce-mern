const express = require("express");
require("dotenv").config();
const morgan = require("morgan");

const app = express();

const port = process.env.PORT; // port for the server

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan("tiny")); // for logging

// Routes
const productRoute = require("./src/routes/productRoute");
const userRoute = require("./src/routes/userRoute.js");

// Use routes
app.use("/products", productRoute);
app.use("/users", userRoute);

// serve static files
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port);
