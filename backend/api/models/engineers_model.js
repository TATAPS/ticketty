const { executeQuery, pool } = require("../../db_connnection.js");

async function getAllEngineers() {
  try {
    const query = `SELECT BIN_TO_UUID(p.uuid, 1) as person_uuid, e.id as engineer_id, e.role, 
      e.active, p.given_name, p.family_name, p.email, p.phone 
      FROM persons p INNER JOIN engineers e 
      ON p.uuid = e.person_uuid;`;
    // const db = await connectDatabase();
    const [engineers] = await executeQuery(query);
    return engineers;
  } catch (error) {
    next(error);
  }
}

async function find(user) {
  const query = `SELECT salt, password FROM engineers WHERE username = ?`;
  try {
    if (user.username && user.password) {
      // const db = await connectDatabase();
      const [result] = await executeQuery(query, user.username);
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllEngineers,
  find,
};
