const connectDatabase = require("../../db_connnection.js");

async function getAllEngineers() {
  const query = "SELECT * from engineers;";
  const db = await connectDatabase();
  const [engineers] = await db.query(query);
  return engineers;
}

module.exports = {
  getAllEngineers,
};
