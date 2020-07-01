// const mongoose = require("mongoose");
const express = require("express");
const app = express();
const routes = require("./src/router");
const db = require("./src/database/config.js");

db();
app.use(express.json());
app.use(routes);

app.listen(3001, () => {
    console.log("API Rodando");
});