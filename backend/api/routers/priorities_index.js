const { Router } = require("express");
const { getAllPrioritiesAction } = require("../controllers/priorities_controller.js");

const router = Router();

router.get("/", getAllPrioritiesAction);

module.exports = { router };
