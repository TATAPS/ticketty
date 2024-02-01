const { executeQuery, pool } = require("../../db_connnection.js");

async function getAllCompanies() {
  const query = "SELECT * from companies";
  const [companies] = await executeQuery(query);
  return companies;
}

async function getSingleCompany(ein_tin) {
  const query = "SELECT * FROM companies WHERE `ein_tin`=?";
  const [companies] = await executeQuery(query, [ein_tin]);
  return companies;
}

async function addCompany(newCompany) {
  const query = "INSERT INTO companies (ein_tin, name) VALUES (?, ?) ON DUPLICATE KEY UPDATE name = VALUES(name)";
  const [company] = await executeQuery(query, newCompany);
  return company;
}

async function updateCompany(updateCompany) {
  // "active" attribute by default is FALSE. We can update "active" status to TRUE/FALSE, company name and ein_tin
  const query = "UPDATE companies SET `name`=?, `active`=? WHERE `ein_tin`=? ";
  const [company] = await executeQuery(query, updateCompany);
  return company;
}

// Function to check if the company already exists
async function checkCompanyExists(ein_tin) {
  const query = "SELECT COUNT(*) AS count FROM companies WHERE ein_tin = ?"
  const [result] = await executeQuery(query, [ein_tin]);
  const companyExists = result[0].count > 0;
  return companyExists;
}

module.exports = {
  getAllCompanies,
  getSingleCompany,
  addCompany,
  updateCompany,
  checkCompanyExists
};
