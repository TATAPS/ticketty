const connectDatabase = require("../../../db_connnection.js");

async function getAllCompanies() {
  const query = "SELECT * from companies";
  const db = await connectDatabase();
  const [companies] = await db.query(query);
  return companies;
}
async function addCompany(newCompany) {
  const query = "INSERT INTO companies(`ein_tin`, `name`) VALUES (?, ?)";
  const db = await connectDatabase();
  const [company] = await db.query(query, newCompany);
  return company;
}
async function updateCompany(updateCompany) {
  // "active" attribute by default is FALSE. We can update "active" status to TRUE/FALSE, company name and ein_tin
  const query = "UPDATE companies SET `name`=?, `active`=? WHERE `ein_tin`=? "
  const db = await connectDatabase();
  const [company] = await db.query(query, updateCompany);
  return company;
}


module.exports = {
  getAllCompanies,
  addCompany,
  updateCompany
};
