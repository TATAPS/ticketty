const express = require("express");
const morgan = require("morgan");
const path = require("path");

const { router: apiRouter } = require("./api/index.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

app.get("/", (req, res, next) => {
  res.send("Hello from backend");
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
