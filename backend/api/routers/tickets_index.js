const { Router } = require("express");
const {
  getAllTicketsAction,
  getSingleTicketAction,
  addTicketAction,
  updateTicketAction,
} = require("../controllers/tickets_controller.js");

const router = Router();

router.get("/", getAllTicketsAction);
router.get("/:ticket_id", getSingleTicketAction);
router.post("/", addTicketAction);
router.put("/update", updateTicketAction);

module.exports = { router };
