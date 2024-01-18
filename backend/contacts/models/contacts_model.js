const connectDatabase = require("..//../db_connnection.js");

async function getAllCompaniesAndContacts() {
  const query = `SELECT cm.ein_tin, cm.name as business_name, cm.active, 
  concat(p.given_name, " ", p.family_name) as contact, p.email, p.phone
  FROM company_contacts c INNER JOIN companies cm
  ON c.company_id = cm.ein_tin
  INNER JOIN persons p
  ON c.person_uuid = p.uuid;`;

  // "SELECT company_id, BIN_TO_UUID(person_uuid, 1) as person_uuid from company_contacts;";
  const db = await connectDatabase();
  const [contacts] = await db.query(query);
  return contacts;
}

module.exports = {
  getAllCompaniesAndContacts,
};
