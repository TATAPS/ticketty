const { executeQuery, pool } = require("../../db_connnection.js");

async function getAllPersons() {
  const query = `
  SELECT BIN_TO_UUID(uuid, 1) as uuid,
  given_name, family_name, email, phone,
  active, created_at from persons;
`;
  const [persons] = await executeQuery(query);
  return persons;
}

async function addPerson(person) {
  const query = `
  INSERT INTO persons (given_name, family_name, email, phone) VALUES (?, ?, ?, ?);
`;
  const [persons] = await executeQuery(query, person);
  return persons;
}

module.exports = {
  getAllPersons,
  addPerson
};
