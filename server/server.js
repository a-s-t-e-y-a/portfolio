const app = require("./app.js");
const http = require("http");
const PORT = 3000;
const http_server = http.createServer(app);
http_server.listen(PORT, () => {
  console.log(`server started scussefully at port ${PORT}`);
});
