const { Router } = require("express");
const {
  getAllContactsAction,
} = require("./controllers/contacts_controller.js");

const router = Router();

router.get("/", getAllContactsAction);

module.exports = { router };
