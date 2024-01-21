const { Router } = require("express");

// const { getAllTicketsAction } = require("./controllers/tickets_controller.js");

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

module.exports = { router };
