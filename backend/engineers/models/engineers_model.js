const connectDatabase = require("../../db_connnection.js");

async function getAllEngineers() {
  const query =
    "SELECT id, BIN_TO_UUID(person_uuid, 1) as person_uuid, role, active, created_at from engineers;";
  const db = await connectDatabase();
  const [engineers] = await db.query(query);
  return engineers;
}

module.exports = {
  getAllEngineers,
};
