const { getAllStatuses } = require("../models/statuses_model.js");

async function getAllStatusesAction(req, res) {
  try {
    const statuses = await getAllStatuses();
    res.status(200).json(statuses);
  } catch (error) {
    console.error("error", error);
  }
}

module.exports = {
  getAllStatusesAction,
};
