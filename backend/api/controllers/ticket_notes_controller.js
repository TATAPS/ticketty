const { performTransaction } = require("../../db_connnection.js");
const {
  getAllTicketNotes,
  addTicketNotes,
  testTransaction,
} = require("../models/ticket_notes_model.js");

async function getAllTicketNotesAction(req, res) {
  try {
    const ticketNotes = await getAllTicketNotes();
    res.json(ticketNotes);
  } catch (error) {
    throw error;
  }
}

async function addTicketNotesAction(req, res) {
  try {
    const { ticketId, note } = req.body;
    // const result = await addTicketNotes(ticketId, note);
    const result = await testTransaction(ticketId, note);
    res.json(result);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllTicketNotesAction,
  addTicketNotesAction,
};
