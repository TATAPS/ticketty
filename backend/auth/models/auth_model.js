const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { getOne } = require("../../engineers/models/engineers_model.js");

async function hashPassword(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return { salt, hashedPassword };
}

async function verifyPassword(password, salt, storedHash) {
  const hashBuffer = await bcrypt.hash(password, salt);

  return hashBuffer === storedHash;
}

async function comparePassword(password, hashedPassword) {
  const isPasswordValid = await bcrypt.compare(password, hashedPassword);
  console.log("isPasswordValid", isPasswordValid);
}

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1m" });
}

module.exports = {
  hashPassword,
  verifyPassword,
  comparePassword,
  generateAccessToken,
};
