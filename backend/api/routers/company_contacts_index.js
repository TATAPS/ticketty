const { Router } = require("express");
const {
  getAllCompaniesAndContactsAction,
  getAllContactsAction,
  getSingleContactAction,
  getCompanyContactsAction,
} = require("../controllers/contacts_controller.js");

const router = Router();

router.get("/", getAllContactsAction);
// don't drop /company_contacts below /:uuid or it won't work
router.get("/company_contacts", getAllCompaniesAndContactsAction);
router.get("/:UUID", getSingleContactAction);
router.get("/company/:ein_tin", getCompanyContactsAction);
module.exports = { router };
