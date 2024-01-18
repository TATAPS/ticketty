const { getAllCompanies } = require("../models/companies_model.js");

async function getAllCompaniesAction(req, res) {
  try {
    const companies = await getAllCompanies();
    res.json(companies);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllCompaniesAction,
};
