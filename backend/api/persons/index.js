const { Router } = require("express");
const { getAllPersonsAction } = require("./controllers/persons_controller.js");

const router = Router();

router.get("/", getAllPersonsAction);

module.exports = { router };
