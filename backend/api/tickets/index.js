const { Router } = require("express");

const { getAllTicketsAction } = require("./controllers/tickets_controller.js");

const router = Router();

router.get("/", getAllTicketsAction);

module.exports = { router };
