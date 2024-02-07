const { executeQuery, pool } = require("../../db_connnection.js");

async function getAllTickets() {
  const query = `
  SELECT t.id,
  DATEDIFF(t.created_at, NOW()) as age_days,
  TIMESTAMPDIFF(HOUR, t.created_at, NOW()) as age_hour,
  MOD(TIMESTAMPDIFF(MINUTE, t.created_at, NOW()), 60) as age_mins,
  cm.name as company, CONCAT(p.given_name, " ", p.family_name) as contact, t.title
  FROM tickets t INNER JOIN companies cm
  ON t.company_id = cm.ein_tin
  INNER JOIN persons p
  ON t.owner_id = p.uuid
  ORDER BY t.id ASC;
  `;
  const [tickets] = await executeQuery(query);
  return tickets;
}

//Left Join to return tickets that don't have any notes
async function getSingleTicket(ticketId) {
  const query = `
  SELECT t.id, t.company_id, 
  BIN_TO_UUID(t.owner_id, 1) as owner_id, 
  t.engineer_id, t.title, t.status, t.ticket_total_time,
  t.created_at, t.closed_at, tn.ticket_id, 
  tn.id as ticket_id, tn.note 
  FROM tickets t LEFT JOIN ticket_notes tn
  ON t.id = tn.ticket_id
  WHERE t.id = ?
  ORDER BY tn.id DESC;
  `;

  const [ticket] = await executeQuery(query, [ticketId]);
  return ticket;
}

async function addTicket(ticket) {
  const query = `INSERT INTO tickets (company_id, engineer_id, title, status, owner_id) VALUES (?, ?, ?, ?, UUID_TO_BIN(?, 1));`;
  const [tickets] = await executeQuery(query, ticket);
  return tickets;
}

async function updateTicket(ticket) {
  const query = `UPDATE tickets SET title=?, status=? WHERE id=?`;
  const [tickets] = await executeQuery(query, ticket);
  return tickets;
}

module.exports = {
  getAllTickets,
  getSingleTicket,
  addTicket,
  updateTicket,
};
