const { createServer } = require("https");
const { readFileSync } = require("fs");

const app = require("./server.js");
const { starterSeedDatabase } = require("./dev_scripts/db_seed.js");
const PORT = process.env.PORT || 8080;

// const privateKey = readFileSync("../cert/key.pem", "utf8");
// const certificate = readFileSync("../cert/cert.pem", "utf8");

const options = {
  key: process.env.privateKey?.replace(/\\n/gm, "\n"),
  cert: process.env.certificate?.replace(/\\n/gm, "\n"),
};

const httpsServer = createServer(options, app);

const init = async () => {
  starterSeedDatabase();
  httpsServer.listen(PORT, () => console.log(`Listening at https://localhost:${PORT}`));
};

init();
