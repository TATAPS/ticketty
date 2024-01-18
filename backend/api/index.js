const { Router } = require("express");

const router = Router();

const { router: contactsRouter } = require("../contacts/index.js");
const { router: companiesRouter } = require("../companies/index.js");
const { router: engineersRouter } = require("../engineers/index.js");
const { router: ticketsRouter } = require("../tickets/index.js");
const { router: personsRouter } = require("../persons/index.js");
const { router: ticketNotesRouter } = require("../ticket_notes/index.js");

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
