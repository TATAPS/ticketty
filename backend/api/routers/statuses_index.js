const { Router } = require("express");
const { getAllStatusesAction } = require("../controllers/statuses_controller.js");

const router = Router();

router.get("/", getAllStatusesAction);

module.exports = { router };
