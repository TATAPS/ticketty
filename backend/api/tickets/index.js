const { Router } = require("express");

const { getAllTicketsAction, addTicketAction, updateTicketAction } = require("./controllers/tickets_controller.js");

const router = Router();

router.get("/", getAllTicketsAction);
router.post("/create", addTicketAction);
router.put("/update", updateTicketAction);

module.exports = { router };
