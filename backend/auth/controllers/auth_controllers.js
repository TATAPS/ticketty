const connectDatabase = require("../../db_connnection.js");
// const { login, register, logout } = require("../models/auth_model.js");
const { find } = require("../../api/engineers/models/engineers_model.js");
const {
  verifyPassword,
  generateAccessToken,
} = require("../models/auth_model.js");
// const { hashPassword, verifyPassword } = require();
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// async function register(req, res) {}

async function loginAction(req, res) {
  if (req.body.user === null) {
    return res.status(400).send("No user submitted");
  }

  const user = await find(req.body.user);
  console.log(user);
  if (user === null) {
    return res.status(400).send("Cannot find user");
  }

  console.log(user);
  const verifiedPassword = await verifyPassword(
    req.body.user.password,
    user[0].salt,
    user[0].password
  );

  const foundUser = { name: user };

  if (verifiedPassword) {
    res.send({ accessToken: generateAccessToken(foundUser) });
  }
  //   console.log(user);
  //   const { username, password } = req.body;
  //   res.json(verifiedPassword);
}

// export const logout = (req, res) => {};

module.exports = {
  loginAction,
};
