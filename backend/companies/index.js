const { Router } = require("express");
const { getAllCompaniesAction } = require("./controllers/companies_controller");

const router = Router();

router.get("/", getAllCompaniesAction);

module.exports = { router };
