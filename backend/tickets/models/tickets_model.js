const connectDatabase = require("../../db_connnection.js");

async function getAllTickets() {
  const query =
    "SELECT id, company_id, BIN_TO_UUID(owner_id, 1) as owner_id, engineer_id, title, status, ticket_total_time, created_at, closed_at FROM tickets;";
  const db = await connectDatabase();
  const [tickets] = await db.query(query);
  return tickets;
}

module.exports = {
  getAllTickets,
};
