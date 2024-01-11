const { getAllContacts } = require("../models/contacts_model.js");

async function getAllContactsAction(req, res) {
  try {
    const contacts = await getAllContacts();
    res.json(contacts);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllContactsAction,
};
