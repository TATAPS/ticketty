const {
  getAllEngineersAdminNotSafe,
  getAllEngineersFrontendSafe,
} = require("../models/engineers_model.js");

async function getAllEngineersAdminNotSafeAction(req, res) {
  const { id } = req.session;
  // console.log("id", id, "req.session", req.session);
  try {
    const engineers = await getAllEngineersAdminNotSafe();
    res.json(engineers);
  } catch (error) {
    throw error;
  }
}

async function getAllEngineersFrontendSafeAction(req, res) {
  try {
    const engineers = await getAllEngineersFrontendSafe();
    res.json(engineers);
  } catch (error) {
    console.error(error);
  }
}
// async function getEngineerAction(req, res, next) {
//   try {
//     const engineer = await getEngineer();
//     res.json(engineer);
//   } catch (error) {
//     next(error);
//   }
// }

module.exports = {
  getAllEngineersAdminNotSafeAction,
  getAllEngineersFrontendSafeAction,
  // getEngineerAction,
};
