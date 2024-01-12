const { Router } = require("express");
const {
  getAllEngineersAction,
} = require("./controllers/engineers_controller.js");

const router = Router();

router.get("/", getAllEngineersAction);

module.exports = { router };
