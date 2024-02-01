const { Router } = require("express");
const {
  getAllCompaniesAction,
  addCompanyAction,
  updateCompanyAction,
} = require("../controllers/companies_controller.js");

const router = Router();

router.get("/", getAllCompaniesAction);
router.post("/add", addCompanyAction);
router.put("/update", updateCompanyAction);

module.exports = { router };
