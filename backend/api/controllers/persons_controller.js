const { getAllPersons, addPerson } = require("../models/persons_model.js");

async function getAllPersonsAction(req, res) {
  try {
    const persons = await getAllPersons();
    res.json(persons);
  } catch (error) {
    throw error;
  }
}


async function addPersonAction(req, res) {
  try {
    const values = [
      req.body.given_name,
      req.body.family_name,
      req.body.email,
      req.body.phone,
    ];
    const newPerson = await addPerson(values);
    res.status(200).json(newPerson);
  } catch (error) {
    throw error;
  }
}


module.exports = {
  getAllPersonsAction,
  addPersonAction
};
