const express = require("express");
const app = express();
const Image = require("./image/model");

app.get("/", (request, response) => {
  response.send("Hello Security!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Security app listening on port :${port}`);
});
