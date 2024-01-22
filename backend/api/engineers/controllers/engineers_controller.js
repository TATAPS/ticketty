const {
  getAllEngineers,
  getEngineer,
} = require("../models/engineers_model.js");

async function getAllEngineersAction(req, res) {
  try {
    const engineers = await getAllEngineers();
    res.json(engineers);
  } catch (error) {
    throw error;
  }
}

async function getEngineerAction(req, res, next) {
  try {
    const engineer = await getEngineer();
    res.json(engineer);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllEngineersAction,
  getEngineerAction,
};
