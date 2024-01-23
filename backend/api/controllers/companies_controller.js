const {
  getAllCompanies,
  addCompany,
  updateCompany,
} = require("../models/companies_model.js");
const moment = require("moment/moment.js");

async function getAllCompaniesAction(req, res) {
  try {
    const companies = await getAllCompanies();
    res.status(200).json(companies);
  } catch (error) {
    throw error;
  }
}
async function addCompanyAction(req, res) {
  try {
    const values = [req.body.ein_tin, req.body.name];
    const newCompanies = await addCompany(values);
    res.status(200).json(newCompanies);
  } catch (error) {
    throw error;
  }
}
async function updateCompanyAction(req, res) {
  try {
    const values = [req.body.name, req.body.active, req.body.ein_tin];
    const updatedCompany = await updateCompany(values);
    res.status(200).json(updatedCompany);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllCompaniesAction,
  addCompanyAction,
  updateCompanyAction,
};
