const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
    }
);

structure 