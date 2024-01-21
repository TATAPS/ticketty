const connectDatabase = require("../../../db_connnection.js");

async function getAllEngineers() {
  try {
    const query = `SELECT BIN_TO_UUID(p.uuid, 1) as person_uuid, e.id as engineer_id, e.role, 
      e.active, p.given_name, p.family_name, p.email, p.phone 
      FROM persons p INNER JOIN engineers e 
      ON p.uuid = e.person_uuid;`;
    const db = await connectDatabase();
    const [engineers] = await db.query(query);
    return engineers;
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllEngineers,
};