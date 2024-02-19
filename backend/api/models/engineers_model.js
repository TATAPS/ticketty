const { executeQuery, pool } = require("../../db_connnection.js");

async function getAllEngineersAdminNotSafe() {
  try {
    const query = `
    SELECT BIN_TO_UUID(p.uuid, 1) as person_uuid,
    e.id as engineer_id, e.role, e.active, p.given_name,
    p.family_name, p.email, p.phone
    FROM persons p INNER JOIN engineers e
    ON p.uuid = e.person_uuid;
    `;
    const [engineers] = await executeQuery(query);
    return engineers;
  } catch (error) {
    next(error);
  }
}

async function getAllEngineersFrontendSafe() {
  try {
    const query = `SELECT e.id, BIN_TO_UUID(p.uuid, 1) as person_uuid,
    CONCAT(p.given_name, " ", p.family_name) as contact, p.email, p.phone
    FROM engineers e INNER JOIN persons p
    ON e.person_uuid = p.uuid;`;
    const [engineers] = await executeQuery(query);
    return engineers;
  } catch (error) {
    console.error(error);
  }
}

async function find(user) {
  const query = `SELECT e.salt, e.password, p.given_name, p.family_name, e.role FROM engineers e JOIN persons p ON e.person_uuid = p.uuid WHERE username = ?`;
  try {
    if (user.username && user.password) {
      const [result] = await executeQuery(query, [user.username]);
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllEngineersAdminNotSafe,
  getAllEngineersFrontendSafe,
  find,
};
