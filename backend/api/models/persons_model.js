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

async function getSinglePerson(uuid) {
  const query = `
  SELECT BIN_TO_UUID(uuid, 1) as uuid,
  CONCAT(given_name, " ", family_name) as contact_name,
  email, phone, active, created_at FROM persons
  WHERE uuid = UUID_TO_BIN(?, 1);
`;
  const [person] = await executeQuery(query, [uuid]);
  console.log(person)
  return person[0] || null; // Return null if no person is found
}

async function addPerson(person) {
  const query = `
  INSERT INTO persons (given_name, family_name, email, phone) VALUES (?, ?, ?, ?);
`;
  const [persons] = await executeQuery(query, person);
  return persons;
}

// Function to check if the company already exists
async function checkPersonExists(uuid) {
  const query = `
    SELECT COUNT(*) AS count FROM persons
    WHERE uuid = UUID_TO_BIN(?, 1);
  `;
  const [result] = await executeQuery(query, [uuid]);

  const personExists = result[0].count > 0;
  return personExists;
}

module.exports = {
  getAllPersons,
  getSinglePerson,
  addPerson,
  checkPersonExists
};
