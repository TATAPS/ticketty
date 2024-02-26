const { executeQuery, performTransaction, pool } = require("../../db_connnection.js");

async function getAllTicketNotes() {
  const query = "SELECT * FROM ticket_notes;";
  const [tickets] = await executeQuery(query);
  return tickets;
}

async function addTicketNotes(ticketId, note) {
  const query = "INSERT INTO ticket_notes (ticket_id, note) VALUES (?, ?);";
  const [result] = await performTransaction(query, [ticketId, note]);
  return result;
}

module.exports = {
  getAllTicketNotes,
  addTicketNotes,
};
