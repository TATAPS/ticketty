const { getAllPersons, getSinglePerson, addPerson } = require("../models/persons_model.js");

async function getAllPersonsAction(req, res) {
  try {
    const persons = await getAllPersons();
    res.json(persons);
  } catch (error) {
    throw error;
  }
}

async function getSinglePersonAction(req, res, next) {
  try {
    const { uuid } = req.params
    const person = await getSinglePerson(uuid);
    if (person) {
      // UUID exists in the table
      res.json(person);
    } else {
      // UUID is not found in the table
      res.status(404).json('Person not found.');
    }

  } catch (error) {
    console.log(error)
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
  getSinglePersonAction,
  addPersonAction
};
