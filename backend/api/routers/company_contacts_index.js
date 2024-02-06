const { Router } = require("express");
const {
  getAllCompaniesAndContactsAction,
  getAllContactsAction,
  getSingleContactAction,
  getCompanyContactsAction,
  addCompanyContactAction,
} = require("../controllers/contacts_controller.js");

const router = Router();

router.get("/", getAllContactsAction);
// don't drop /company_contacts below /:uuid or it won't work
router.get("/company_contacts", getAllCompaniesAndContactsAction);
router.get("/company/:ein_tin", getCompanyContactsAction);
router.get("/:UUID", getSingleContactAction);
router.post("/add", addCompanyContactAction);

module.exports = { router };
