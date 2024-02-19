const { Router } = require("express");
const { loginAction, logoutAction } = require("./controllers/auth_controllers.js");
const { isAuthenticated } = require("./middleware/auth_middleware.js");
// const { getAllTicketsAction } = require("./controllers/tickets_controller.js");

const router = Router();

router.post("/login", loginAction);
router.get("/profile", isAuthenticated, (req, res) => {
  res.send(`Welcome ${req.session.user.username} to your profile`);
});
// router.post("/register", register);
// router.get("/logout", logoutAction);
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.sendStatus(500);
    } else {
      console.log("status 200");
      res.status(200).json("All good, session destroyed, check in mysql to confirm");
    }
  });
});

module.exports = { router };
