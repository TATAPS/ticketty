require("dotenv").config();
const mysql = require("mysql2/promise");
const fs = require("fs").promises;

async function starterSeedDatabase() {
  try {
    const sqlSeedData = await fs.readFile("dev_scripts/seed.sql", {
      encoding: "utf8",
    });

    const connection = await mysql.createConnection({
      host: process.env.MYSQLHOST,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      multipleStatements: true,
    });

    await connection.connect();
    await connection.query(sqlSeedData);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  starterSeedDatabase,
};
