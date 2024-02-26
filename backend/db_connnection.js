require("dotenv").config();
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function executeQuery(sql, values) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows, fields] = await connection.execute(sql, values);
    // console.log("rows", rows, "fields", fields);
    return [rows];
  } finally {
    if (connection) {
      connection.release();
      // console.log("connection released back to the pool");
    }
  }
}

async function performTransaction(sql, values) {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();
    const [rows, fields] = await connection.execute(sql, values);
    await connection.commit();
    console.log("transaction committed successfully,");
    return [rows];
  } catch (err) {
    await connection.rollback();
    // console.error(err),
    throw err;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

module.exports = {
  executeQuery,
  performTransaction,
  pool,
};
// async function connectDatabase() {
//   try {
//     const connection = await mysql.createConnection({
//       host: process.env.HOST,
//       user: process.env.USER,
//       password: process.env.PASSWORD,
//       database: process.env.DATABASE,
//     });

//     return connection;
//   } catch (err) {
//     throw err;
//   }
// }

// module.exports = connectDatabase;
