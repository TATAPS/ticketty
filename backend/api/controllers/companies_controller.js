const { pool } = require("../../db_connnection.js");
const {
  getAllCompanies,
  addCompany,
  updateCompany,
  getSingleCompany,
  // checkCompanyExists
} = require("../models/companies_model.js");
const moment = require("moment/moment.js");

async function getAllCompaniesAction(req, res) {
  console.log("req.session.cookie", req.session.cookie);
  try {
    const companies = await getAllCompanies();
    // console.log("req.session.viewCount", req.session.viewCount);
    res.status(200).json(companies);
  } catch (error) {
    throw error;
  }
}

async function getSingleCompanyAction(req, res) {
  try {
    const { ein_tin } = req.params;
    const company = await getSingleCompany(ein_tin);
    res.status(200).json(company);
  } catch (error) {
    throw error;
  }
}


async function addCompanyAction(req, res) {
  try {
    const ein_tin = req.body.ein_tin;
    const values = [ein_tin, req.body.name];
    const newCompany = await addCompany(values);
    res.status(200).json(newCompany);

    // // Check if the company already exists
    // const companyExists = await checkCompanyExists(ein_tin);

    // if (companyExists) {
    //   // Company already exists
    //   res.status(400).json('Company already exists.');
    // } else {
    //   // Company doesn't exist, proceed with adding the new company
    //   const values = [ein_tin, req.body.name];
    //   const newCompany = await addCompany(values);
    //   res.status(200).json(newCompany);
    // }
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
  getSingleCompanyAction
};
