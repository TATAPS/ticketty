require("dotenv").config();
console.log(process.env.HOST, process.env.PASSWORD);
const mysql = require("mysql2/promise");
const fs = require("fs").promises;

async function starterSeedDatabase() {
  try {
    const sqlSeedData = await fs.readFile("dev_scripts/seed.sql", {
      encoding: "utf8",
    });

    const connection = await mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.SEEDDATABASE,
      multipleStatements: true,
    });

    await connection.connect();
    await connection.query(sqlSeedData);
  } catch (err) {
    throw err;
  }
  //finally {
  //   await connection.end(function (err) {
  //     if (err) {
  //       throw err;
  //     }
  //   });
  // }
}

module.exports = {
  starterSeedDatabase,
};
