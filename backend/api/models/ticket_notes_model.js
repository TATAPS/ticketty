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

async function createTicketNotesOperation(connection, ticketId, note) {
  const query = "INSERT INTO ticket_notes (ticket_id, note) VALUES (?, ?);";
  const [result] = await connection.execute(query, [ticketId, note]);
  return result;
}

async function testTransaction(ticketId, note) {
  const data = await performTransaction([
    { operation: createTicketNotesOperation, params: [ticketId, note] },
  ]);
  console.log(data);
  return data;
}

module.exports = {
  getAllTicketNotes,
  addTicketNotes,
  createTicketNotesOperation,
  testTransaction,
};
