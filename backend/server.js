const express = require("express");
const morgan = require("morgan");
const path = require("path");

const { router: contactsRouter } = require("./contacts/index.js");
const { router: companiesRouter } = require("./companies/index.js");
const { router: engineersRouter } = require("./engineers/index.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/companies", companiesRouter);
app.use("/contacts", contactsRouter);
app.use("/engineers", engineersRouter);

app.get("/", (req, res, next) => {
  res.send("Hello from backend");
});

module.exports = app;
