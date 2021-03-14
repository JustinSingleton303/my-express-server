/* server.js for my-express-server
   Author: Justin Singleton       */

const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Sup, y'all");
});

app.get('/about', (req, res) =>{
  res.send("<h1>I'm freaking hardcore, yo!</h1>");
});

app.get('/horses', (req, res)=>{
  res.send("<h1>Adopt a horse page</h1>");
});

app.listen(port, () => {
  console.log("server running hit ^C to stop");
});
