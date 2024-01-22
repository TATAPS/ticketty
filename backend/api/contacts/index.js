const { Router } = require("express");
const {
  getAllCompaniesAndContactsAction,
  getAllContactsAction,
} = require("./controllers/contacts_controller.js");

const router = Router();

router.get("/", getAllContactsAction);
router.get("/company_contacts", getAllCompaniesAndContactsAction);

module.exports = { router };
