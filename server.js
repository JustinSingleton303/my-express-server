/* server.js for my-express-server
   Author: Justin Singleton       */

const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Sup, y'all");
});

app.listen(port, () => {
  console.log("server running hit ^C to stop");
});
