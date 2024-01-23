const { getAllTicketNotes } = require("../models/ticket_notes_model.js");

async function getAllTicketNotesAction(req, res) {
  try {
    const ticketNotes = await getAllTicketNotes();
    res.json(ticketNotes);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllTicketNotesAction,
};
