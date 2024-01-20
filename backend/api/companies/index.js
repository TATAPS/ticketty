const { Router } = require("express");
const { getAllCompaniesAction, addCompanyAction, updateCompanyAction } = require("./controllers/companies_controller");

const router = Router();

router.get("/", getAllCompaniesAction);
router.post("/create", addCompanyAction);
router.put("/update", updateCompanyAction);

module.exports = { router };
