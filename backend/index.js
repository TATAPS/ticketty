const app = require("./server.js");

const PORT = process.env.PORT || 8080;

const init = async () => {
  app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
};

init();
