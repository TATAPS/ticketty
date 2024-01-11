require("dotenv").config();
const mysql = require("mysql2/promise");

async function connectDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });

    return connection;
  } catch (err) {
    throw err;
  }
}

module.exports = connectDatabase;
