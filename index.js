const express = require("express");
const app = express();
const cors = require("cors");
const corsMiddleware = cors();
const bodyParser = require("body-parser");
const bodyParserMiddleware = bodyParser.json();
const Image = require("./image/model");
const User = require("./user/model");
const imageRouter = require("./image/router");
const authRouter = require("./auth/router");
const userRouter = require("./user/router");

app.use(corsMiddleware);
app.use(bodyParserMiddleware);
app.use(imageRouter);
app.use(authRouter);
app.use(userRouter);

app.get("/", (request, response) => {
  response.send("Hello Security!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Security app listening on port :${port}`);
});
