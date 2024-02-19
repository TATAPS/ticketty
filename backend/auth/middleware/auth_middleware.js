const jwt = require("jsonwebtoken");
const jwtSecret = process.env.jwtSecret;

function verifyToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

async function isAuthenticated(req, res, next) {
  try {
    // if (req.session.authenticated) {
    if (req.session.user) {
      next();
    } else {
      res.redirect("/auth/login");
    }
  } catch (error) {
    console.error("Error in isAuthenticated middleware", error);
    res.status(500).send("Internal server error");
  }
}

async function isManager(req, res, next) {
  try {
    if (req.session.user.role) {
      next();
    } else {
      res.status(404).send("Resource not found");
    }
  } catch (error) {
    console.error("Error in isManager middleware", error);
    res.status(500).send("Internal server error");
  }
}

module.exports = {
  isAuthenticated,
  isManager,
  verifyToken,
};
