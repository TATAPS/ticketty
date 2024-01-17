const connectDatabase = require("../../db_connnection.js");

async function getAllPersons() {
  const query =
    "SELECT BIN_TO_UUID(uuid, 1) as uuid, given_name, family_name, email, phone, active, created_at from persons;";
  const db = await connectDatabase();
  const [persons] = await db.query(query);
  return persons;
}

module.exports = {
  getAllPersons,
};
