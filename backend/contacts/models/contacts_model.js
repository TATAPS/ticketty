const connectDatabase = require("..//../db_connnection.js");

async function getAllContacts() {
  const query =
    "SELECT company_id, BIN_TO_UUID(person_uuid, 1) as person_uuid from company_contacts;";
  const db = await connectDatabase();
  const [contacts] = await db.query(query);
  return contacts;
}

module.exports = {
  getAllContacts,
};
