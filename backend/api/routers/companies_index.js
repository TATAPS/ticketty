const { Router } = require("express");
const {
  getAllCompaniesAction,
  addCompanyAction,
  updateCompanyAction,
  getSingleCompanyAction
} = require("../controllers/companies_controller.js");

const router = Router();

router.get("/", getAllCompaniesAction);
router.get("/:ein_tin", getSingleCompanyAction);
router.post("/add", addCompanyAction);
router.put("/update", updateCompanyAction);

module.exports = { router };
