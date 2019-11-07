const bodyParser = require("body-parser");
const express = require("express");

const dictionary = require("./src/controllers/dictionary");
const status = require("./src/controllers/status");

const app = express();
app.use(bodyParser.json());

app.use("/dictionary", dictionary);
app.use("/", status);

module.exports = app;
