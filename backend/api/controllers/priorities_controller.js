const { getAllPriorities } = require("../models/priorities_model.js");

async function getAllPrioritiesAction(req, res, next) {
  try {
    const priorities = await getAllPriorities();
    res.status(200).json(priorities);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getAllPrioritiesAction,
};
