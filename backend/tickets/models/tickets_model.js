const connectDatabase = require("../../db_connnection.js");

async function getAllTickets() {
  const query = "SELECT * from tickets;";
  const db = await connectDatabase();
  const [tickets] = await db.query(query);
  return tickets;
}

module.exports = {
  getAllTickets,
};
