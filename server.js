const express = require("express");
const db = require("./database");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port ? port : 5000}`);
});
