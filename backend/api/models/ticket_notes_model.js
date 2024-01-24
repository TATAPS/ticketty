const { executeQuery, pool } = require("../../db_connnection.js");

async function getAllTicketNotes() {
  const query = "SELECT * FROM ticket_notes;";
  const [tickets] = await executeQuery(query);
  return tickets;
}

module.exports = {
  getAllTicketNotes,
};
