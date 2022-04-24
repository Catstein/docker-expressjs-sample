const express = require("express");
const app = express();

// porta definida no environment do projeto através do dockerfile.
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
