const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./public")));

app.use("/books", require("./routes/books"));

module.exports = app;
