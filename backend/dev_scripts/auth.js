const bcrypt = require("bcrypt");

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
  console.log(isPasswordValid);
}

module.exports = {
  hashPassword,
  verifyPassword,
  comparePassword,
};
