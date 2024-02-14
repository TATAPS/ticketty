const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const sessionStore = require("./session.js");
const { router: apiRouter } = require("./api/index.js");
const { router: authRouter } = require("./auth/index.js");
const { isAuthenticated } = require("./auth/middleware/auth_middleware.js");
const app = express();
const corsOptions = {
  origin: "https://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const MAXAGE = 1000 * 60 * 60 * 2;

app.use(
  session({
    key: "session_cookie_name",
    secret: "session_cookie_secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false, // turn false for cookie consent
    cookie: {
      maxAge: MAXAGE,
      secure: true,
      sameSite: true,
    },
  })
);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/api", isAuthenticated, apiRouter);

app.get("/", (req, res, next) => {
  res.send("Hello from backend");
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
