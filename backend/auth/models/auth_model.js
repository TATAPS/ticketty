const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { getOne } = require("../../engineers/models/engineers_model.js");

async function logout(req, res, err) {
  try {
    await req.session.destroy((err) => {
      if (err) {
        console.error("error destroying session:", err);
        res.sendStatus(500);
      } else {
        res.redirect("https://localhost:3000/auth/login");
      }
    });
  } catch (error) {
    console.error(error);
  }
}

async function hashPassword(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return { salt, hashedPassword };
}

async function verifyPassword(password, salt, storedHash) {
  try {
    const hashBuffer = await bcrypt.hash(password, salt);
    return hashBuffer === storedHash;
  } catch (error) {
    console.error(error);
  }
}

async function comparePassword(password, hashedPassword) {
  const isPasswordValid = await bcrypt.compare(password, hashedPassword);
  console.log("isPasswordValid", isPasswordValid);
}

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1m" });
}

module.exports = {
  logout,
  hashPassword,
  verifyPassword,
  comparePassword,
  generateAccessToken,
};
