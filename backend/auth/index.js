const { Router } = require("express");
const { loginAction } = require("./controllers/auth_controllers.js");

// const { getAllTicketsAction } = require("./controllers/tickets_controller.js");

const router = Router();

router.post("/login", loginAction);
// router.post("/register", register);
// router.post("/logout", logout);

module.exports = { router };
