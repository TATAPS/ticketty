const connectDatabase = require("../../../db_connnection.js");


async function register() {
  //CHECK USER IF EXISTS
  // const q = "SELECT * FROM users WHERE username = ?";
  // const db = await connectDatabase();
  // const [TABLE] = await db.query(query);
  // return user;

}
async function login() {
}


async function logout() {

}



module.exports = {
  register,
  login,
  logout
};
