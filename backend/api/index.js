const { Router } = require("express");

const router = Router();

const { router: contactsRouter } = require("../api/contacts/index.js");
const { router: companiesRouter } = require("../api/companies/index.js");
const { router: engineersRouter } = require("../api/engineers/index.js");
const { router: ticketsRouter } = require("../api/tickets/index.js");
const { router: personsRouter } = require("../api/persons/index.js");
const { router: ticketNotesRouter } = require("../api/ticket_notes/index.js");

router.use("/companies", companiesRouter);
router.use("/contacts", contactsRouter);
router.use("/engineers", engineersRouter);
router.use("/tickets", ticketsRouter);
router.use("/persons", personsRouter);
router.use("/ticketNotes", ticketNotesRouter);

router.use((req, res, next) => {
  const error = new Error("Page not Found");
  error.status = 404;
  next(error);
});

module.exports = {
  router,
};
