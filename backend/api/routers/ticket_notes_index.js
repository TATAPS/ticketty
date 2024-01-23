const { Router } = require("express");
const { getAllTicketNotesAction } = require("../controllers/ticket_notes_controller.js");

const router = Router();

router.get("/", getAllTicketNotesAction);

module.exports = { router };
