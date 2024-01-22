const {
  getAllCompaniesAndContacts,
  getAllContacts,
} = require("../models/contacts_model.js");

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

module.exports = {
  getAllCompaniesAndContactsAction,
  getAllContactsAction,
};
