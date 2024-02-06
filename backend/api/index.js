const { Router } = require("express");

const router = Router();

const { router: contactsRouter } = require("../api/routers/company_contacts_index.js");
const { router: companiesRouter } = require("../api/routers/companies_index.js");
const { router: engineersRouter } = require("../api/routers/engineers_index.js");
const { router: ticketsRouter } = require("../api/routers/tickets_index.js");
const { router: personsRouter } = require("../api/routers/persons_index.js");
const { router: ticketNotesRouter } = require("../api/routers/ticket_notes_index.js");
const { router: statusesRouter } = require("../api/routers/statuses_index.js");

router.use("/companies", companiesRouter);
router.use("/contacts", contactsRouter);
router.use("/engineers", engineersRouter);
router.use("/statuses", statusesRouter);
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
