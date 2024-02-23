const { executeQuery } = require("../../db_connnection.js");

async function getAllPriorities() {
  const query = "SELECT * FROM priorities;";
  const [priorities] = await executeQuery(query);
  return priorities;
}

// async function addPriority() {

// }

// async function updatePriority() {

// }

module.exports = {
  getAllPriorities,
};
