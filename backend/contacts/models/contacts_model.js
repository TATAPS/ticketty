const connectDatabase = require("..//../db_connnection.js");

async function getAllContacts() {
  const query = "SELECT * from contacts;";
  const db = await connectDatabase();
  const [contacts] = await db.query(query);
  return contacts;
}

module.exports = {
  getAllContacts,
};
