const {
  getAllCompaniesAndContacts,
  getAllContacts,
  getSingleContact,
  getCompanyContacts,
  addCompanyContact,
} = require("../models/contacts_model.js");
const { checkCompanyExists } = require("../models/companies_model.js");
const { checkPersonExists } = require("../models/persons_model.js");

async function getAllCompaniesAndContactsAction(req, res, next) {
  try {
    const contacts = await getAllCompaniesAndContacts();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
}

async function getAllContactsAction(req, res, next) {
  try {
    const contacts = await getAllContacts();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
}

async function getCompanyContactsAction(req, res, next) {
  try {
    const { ein_tin } = req.params;
    const [contacts] = await getCompanyContacts(ein_tin);
    res.json(contacts);
  } catch (error) {
    console.error(error);
  }
}

async function getSingleContactAction(req, res, next) {
  try {
    const { UUID } = req.params;
    const contact = await getSingleContact(UUID);
    res.json(contact);
  } catch (error) {
    console.error(error);
  }
}

async function addCompanyContactAction(req, res, next) {
  try {
    const { ein_tin, uuid } = req.body;
    const values = [ein_tin, uuid];
    const companyExists = await checkCompanyExists(ein_tin);
    console.log("companyExists", companyExists);
    const personExists = await checkPersonExists(uuid);
    console.log("personExists", personExists);
    if (!companyExists) {
      res.status(400).json("Invalid Company");
    }
    if (!personExists) {
      res.status(400).json("Invalid Account");
    }
    if (personExists && companyExists) {
      const contacts = await addCompanyContact(values);
      res.json(contacts);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCompaniesAndContactsAction,
  getAllContactsAction,
  getSingleContactAction,
  getCompanyContactsAction,
  addCompanyContactAction,
};
