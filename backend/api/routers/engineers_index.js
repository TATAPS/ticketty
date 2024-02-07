const { Router } = require("express");
const {
  getAllEngineersAdminNotSafeAction,
  getAllEngineersFrontendSafeAction,
} = require("../controllers/engineers_controller.js");

const router = Router();

// router.get("/", getAllEngineersAdminNotSafeAction);
router.get("/", getAllEngineersFrontendSafeAction);

module.exports = { router };
