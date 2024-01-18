const { getAllCompaniesAndContacts } = require("../models/contacts_model.js");

async function getAllContactsAction(req, res, next) {
  try {
    const contacts = await getAllCompaniesAndContacts();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllContactsAction,
};
