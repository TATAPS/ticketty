const { Router } = require("express");
const { getAllPersonsAction, getSinglePersonAction, addPersonAction } = require("../controllers/persons_controller.js");

const router = Router();

router.get("/", getAllPersonsAction);
router.get("/:uuid", getSinglePersonAction);
router.post("/add", addPersonAction);

module.exports = { router };
