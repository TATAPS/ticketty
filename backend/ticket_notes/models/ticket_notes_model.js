const connectDatabase = require("../../db_connnection.js");

async function getAllTicketNotes() {
  const query = "SELECT * FROM ticket_notes;";
  const db = await connectDatabase();
  const [tickets] = await db.query(query);
  return tickets;
}

module.exports = {
  getAllTicketNotes,
};
