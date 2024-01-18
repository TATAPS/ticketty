const { getAllEngineers } = require("../models/engineers_model.js");

async function getAllEngineersAction(req, res) {
  try {
    const engineers = await getAllEngineers();
    res.json(engineers);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllEngineersAction,
};
