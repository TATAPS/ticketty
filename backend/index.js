const app = require("./server.js");
const { starterSeedDatabase } = require("./dev_scripts/db_seed.js");
const PORT = process.env.PORT || 8080;

const init = async () => {
  starterSeedDatabase();
  app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
};

init();
