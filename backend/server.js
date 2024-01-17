const express = require("express");
const morgan = require("morgan");
const path = require("path");

const { router: contactsRouter } = require("./contacts/index.js");
const { router: companiesRouter } = require("./companies/index.js");
const { router: engineersRouter } = require("./engineers/index.js");
const { router: ticketsRouter } = require("./tickets/index.js");
const { router: personsRouter } = require("./persons/index.js");
const { router: ticketNotesRouter } = require("./ticket_notes/index.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/companies", companiesRouter);
app.use("/contacts", contactsRouter);
app.use("/engineers", engineersRouter);
app.use("/tickets", ticketsRouter);
app.use("/persons", personsRouter);
app.use("/ticketNotes", ticketNotesRouter);

app.get("/", (req, res, next) => {
  res.send("Hello from backend");
});

module.exports = app;
