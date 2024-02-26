const { Router } = require("express");
const {
  getAllTicketNotesAction,
  addTicketNotesAction,
} = require("../controllers/ticket_notes_controller.js");

const router = Router();

router.get("/", getAllTicketNotesAction);
router.post("/create", addTicketNotesAction);

module.exports = { router };
