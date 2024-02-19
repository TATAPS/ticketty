const { executeQuery, pool } = require("../../db_connnection.js");
// const { login, register, logout } = require("../models/auth_model.js");
// const { find } = require("../../api/models/engineers_model.js");
const { find } = require("../../api/models/engineers_model.js");
const { logout, verifyPassword } = require("../models/auth_model.js");
const { Cookie } = require("express-session");

async function loginAction(req, res, next) {
  const user = req.body;
  try {
    if (user === null) {
      return res.status(400).send("No user submitted");
    }

    const foundUser = await find(user); // get back an array
    if (foundUser.length === 0) {
      return res.status(404).send("Cannot find user");
    }

    const verifiedPassword = await verifyPassword(
      user.password,
      foundUser[0].salt,
      foundUser[0].password
    );

    if (verifiedPassword) {
      req.session.regenerate(function (err) {
        if (err) next(err);

        req.session.user = {
          username: foundUser[0]["given_name"],
          role: foundUser[0]["role"],
        };
        // res.cookie("user");
        res.cookie("username", foundUser[0]["given_name"], {
          expires: new Date(Date.now() + 900000),
          secure: true,
        });
        req.session.save(function (err) {
          if (err) return next(err);
          res.status(200).json("all good");
        });
      });
    } else {
      res.status(400).json("Username or Password incorrect");
    }
  } catch (error) {
    // console.error(error);
    next(error);
  }
}

// export const logout = (req, res) => {};

async function logoutAction(req, res, next) {
  try {
    const result = await logout();
    return result;
  } catch (error) {
    // console.error(error);
    next(error);
  }
}
module.exports = {
  logoutAction,
  loginAction,
};
