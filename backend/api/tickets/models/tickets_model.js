const connectDatabase = require("../../../db_connnection.js");

async function getAllTickets() {
  const query = `SELECT t.id,
  DATEDIFF(t.created_at, NOW()) as age_days,
  TIMESTAMPDIFF(HOUR, t.created_at, NOW()) as age_hour,
  MOD(TIMESTAMPDIFF(MINUTE, t.created_at, NOW()), 60) as age_mins,
  cm.name as company, concat(p.given_name, " ", p.family_name) as contact, t.title
  FROM tickets t INNER JOIN companies cm
  ON t.company_id = cm.ein_tin
  INNER JOIN persons p
  ON t.owner_id = p.uuid;`;

  // "SELECT id, company_id, BIN_TO_UUID(owner_id, 1) as owner_id, engineer_id, title, status, ticket_total_time, created_at, closed_at FROM tickets;";
  const db = await connectDatabase();
  const [tickets] = await db.query(query);
  return tickets;
}

async function addTicket(ticket) {
  const query = `INSERT INTO tickets (company_id, title, status) VALUES (?, ?, ?);`;
  const db = await connectDatabase();
  const [tickets] = await db.query(query, ticket);
  return tickets;
}

async function updateTicket(ticket) {
  const query = `UPDATE tickets SET title=?, status=? WHERE id=?`;
  const db = await connectDatabase();
  const [tickets] = await db.query(query, ticket);
  return tickets;
}

module.exports = {
  getAllTickets,
  addTicket,
  updateTicket
};
