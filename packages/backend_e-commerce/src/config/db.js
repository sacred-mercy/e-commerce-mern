const mongoose = require("mongoose");
require("dotenv").config();

function connect() {
	mongoose.connect(process.env.DB_URL);
}

function disconnect() {
    mongoose.disconnect();
}

// export all the functions
module.exports = {
    connect,
    disconnect
};