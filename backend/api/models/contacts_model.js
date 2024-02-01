const { executeQuery, pool } = require("../../db_connnection.js");

async function getAllCompaniesAndContacts() {
  try {
    const query = `
    SELECT cm.ein_tin, cm.name as business_name, cm.active,
    CONCAT(p.given_name, " ", p.family_name) as contact, p.email, p.phone
    FROM company_contacts c INNER JOIN companies cm
    ON c.company_id = cm.ein_tin
    INNER JOIN persons p
    ON c.person_uuid = p.uuid;
    `;
    const [contacts] = await executeQuery(query);
    return contacts;
  } catch (err) {
    console.error(err);
  }
}

async function getAllContacts() {
  try {
    const query = `
    SELECT BIN_TO_UUID(p.uuid, 1) as person_uuid,
    CONCAT(p.given_name, " ", p.family_name) as contact_name,
    p.email, p.phone
    FROM company_contacts c INNER JOIN persons p
    ON c.person_uuid = p.uuid;
    `;
    const [contacts] = await executeQuery(query);
    return contacts;
  } catch (err) {
    console.error(err);
  }
}

async function getSingleContact(UUID) {
  try {
    const query = `
    SELECT BIN_TO_UUID(p.uuid, 1) as person_uuid,
    CONCAT(p.given_name, " ", p.family_name) as contact_name,
    p.email, p.phone
    FROM company_contacts c INNER JOIN persons p
    ON c.person_uuid = p.uuid
    WHERE person_uuid = UUID_TO_BIN(?, 1);
    `;
    const [contact] = await executeQuery(query, [UUID]);
    return contact;
  } catch (err) {
    console.error(err);
  }
}

async function getCompanyContacts(ein_tin) {
  try {
    const query = `
    SELECT cm.ein_tin, cm.name as business_name, cm.active,
    CONCAT(p.given_name, " ", p.family_name) as contact, p.email, p.phone
    FROM company_contacts c INNER JOIN companies cm
    ON c.company_id = cm.ein_tin
    INNER JOIN persons p
    ON c.person_uuid = p.uuid
    WHERE cm.ein_tin = ?;
    `;
    const [contacts] = await executeQuery(query, [ein_tin]);
    return contacts;
  } catch (error) {
    console.log(error)
  }
}

async function addCompanyContact(newContact) {
  try {
    const query = `
    INSERT INTO company_contacts (company_id, person_uuid)
    VALUES (?, UUID_TO_BIN(?, 1));
    `;
    const [contacts] = await executeQuery(query, newContact);
    return contacts;
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllCompaniesAndContacts,
  getAllContacts,
  getSingleContact,
  getCompanyContacts,
  addCompanyContact,
};
