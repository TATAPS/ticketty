const { getAllPersons } = require("../models/persons_model.js");

async function getAllPersonsAction(req, res) {
  try {
    const persons = await getAllPersons();
    res.json(persons);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllPersonsAction,
};
