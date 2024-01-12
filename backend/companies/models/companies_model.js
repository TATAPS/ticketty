const connectDatabase = require("../../db_connnection.js");

async function getAllCompanies() {
  const query = "SELECT * from companies";
  const db = await connectDatabase();
  const [companies] = await db.query(query);
  return companies;
}

module.exports = {
  getAllCompanies,
};
