require("dotenv").config();
const mysql = require("mysql2/promise");
const { pool } = require("./db_connnection.js");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const sessionStore = new MySQLStore(
  {
    clearExpired: true,
    checkExpirationInterval: 60000, //900000, //every 15 mins
    expiration: 43200000, //86400000, // 1 day
  },
  pool
);

module.exports = sessionStore;
