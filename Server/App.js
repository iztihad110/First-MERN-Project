let express = require("express");
let mongoose = require("mongoose");
let app = express();
let router = require("./Routes");
let cors = require("cors");
app.use(cors());
app.use("/user", router);


module.exports = {
    app, mongoose
}