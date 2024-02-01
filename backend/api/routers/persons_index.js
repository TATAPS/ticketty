const { Router } = require("express");
const { getAllPersonsAction, addPersonAction } = require("../controllers/persons_controller.js");

const router = Router();

router.get("/", getAllPersonsAction);
router.post("/add", addPersonAction);

module.exports = { router };
