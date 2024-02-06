const { executeQuery, pool } = require("../../db_connnection.js");

async function getAllStatuses() {
  try {
    const query = "SELECT * from statuses";
    const [statuses] = await executeQuery(query);
    return statuses;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllStatuses,
};
