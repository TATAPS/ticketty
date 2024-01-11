const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("Hello from backend");
});

module.exports = app;
