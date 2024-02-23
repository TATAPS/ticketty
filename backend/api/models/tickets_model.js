const { executeQuery, pool } = require("../../db_connnection.js");

async function getAllTickets() {
  // const query = `
  // SELECT t.id,
  // DATEDIFF(t.created_at, NOW()) as age_days,
  // TIMESTAMPDIFF(HOUR, t.created_at, NOW()) as age_hour,
  // MOD(TIMESTAMPDIFF(MINUTE, t.created_at, NOW()), 60) as age_mins,
  // cm.name as company, CONCAT(p.given_name, " ", p.family_name) as contact, t.title
  // FROM tickets t INNER JOIN companies cm
  // ON t.company_id = cm.ein_tin
  // INNER JOIN persons p
  // ON t.owner_id = p.uuid
  // ORDER BY t.id ASC;
  // `;
  const query = `
  SELECT t.created_at as ticket_creation_time, t.id, t.priority,
  t.company_id, c.name AS company,
  DATEDIFF(t.created_at, NOW()) as age_days,
  BIN_TO_UUID(t.owner_id, 1) AS owner_id,
  CONCAT(p.given_name, " ", p.family_name) AS contact,
  p.phone, p.email, t.engineer_id,
  BIN_TO_UUID(e.person_uuid, 1) as engineer_uuid,
  CONCAT(eng.given_name, " ", eng.family_name) AS engineer,
  t.title, t.status, t.ticket_total_time, t.created_at
  FROM tickets t JOIN companies c ON t.company_id = c.ein_tin
  JOIN persons p ON t.owner_id = p.uuid
  JOIN engineers e ON t.engineer_id = e.id
  JOIN persons eng ON e.person_uuid = eng.uuid
  ORDER BY t.id;
  `;
  const [tickets] = await executeQuery(query);
  return tickets;
}

//Left Join to return tickets that don't have any notes
async function getSingleTicket(ticketId) {
  // const query = `
  // SELECT
  // t.created_at as ticket_creation_time,
  //   t.id,
  //   t.priority,
  //   t.company_id,
  //   BIN_TO_UUID(t.owner_id, 1) AS owner_id,
  //   t.engineer_id,
  //   t.title,
  //   t.status,
  //   t.ticket_total_time,
  //   t.created_at,
  //   t.closed_at,
  //   tn.ticket_id,
  //   tn.id AS note_id,
  //   tn.note,
  //   CONCAT(p.given_name, " ", p.family_name) AS contact
  // FROM
  //   tickets t
  // LEFT JOIN
  //   ticket_notes tn ON t.id = tn.ticket_id
  // JOIN
  //   companies c ON t.company_id = c.ein_tin
  // JOIN
  //   persons p ON t.owner_id = p.uuid
  // WHERE
  //   t.id = ?
  // ORDER BY
  //   tn.id DESC;
  // `;

  const query = `SELECT t.created_at as ticket_creation_time, t.id, t.priority, t.company_id, c.name AS company, 
DATEDIFF(t.created_at, NOW()) as age_days,
BIN_TO_UUID(t.owner_id, 1) AS owner_id, 
CONCAT(p.given_name, " ", p.family_name) AS contact, p.phone, p.email, t.engineer_id, BIN_TO_UUID(e.person_uuid, 1) AS engineer_uuid, 
CONCAT(eng.given_name, " ", eng.family_name) AS engineer, eng.phone AS engineer_phone, eng.email AS engineer_email, 
t.title, t.status, t.ticket_total_time, tn.id AS ticket_notes_id, 
tn.ticket_id AS ticket_id, tn.note, tn.total_time AS ticket_note_total_time, 
tn.created_at AS ticket_note_creation_time
FROM tickets t JOIN companies c ON t.company_id = c.ein_tin
JOIN persons p ON t.owner_id = p.uuid
JOIN engineers e ON t.engineer_id = e.id
JOIN persons eng ON e.person_uuid = eng.uuid
LEFT JOIN ticket_notes tn ON t.id = tn.ticket_id
WHERE t.id = ?
ORDER BY tn.id DESC;
`;
  const [ticket] = await executeQuery(query, [ticketId]);
  return ticket;
}

async function addTicket(ticket) {
  const query = `
  INSERT INTO
    tickets (priority, company_id, engineer_id, title, status, owner_id)
  VALUES
    (?, ?, ?, ?, ?, UUID_TO_BIN(?, 1));`;
  const [tickets] = await executeQuery(query, ticket);
  return tickets;
}

async function updateTicket(ticket) {
  // const query = `UPDATE tickets t JOIN persons p ON t.owner_id = p.uuid SET t.title=?, t.company_id=?, t.status=?, t.engineer_id=?, p.given_name=?, p.family_name=? WHERE t.id=?`;
  const query = `
  UPDATE tickets SET
  priority=?, 
  company_id=?,
  owner_id=UUID_TO_BIN(?, 1), 
  engineer_id=?, title=?, status=?, 
  ticket_total_time=? 
  WHERE id=?;`;
  const [tickets] = await executeQuery(query, ticket);
  return tickets;
}

module.exports = {
  getAllTickets,
  getSingleTicket,
  addTicket,
  updateTicket,
};
