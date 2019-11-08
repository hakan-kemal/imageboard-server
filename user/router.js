const { Router } = require("express");
const User = require("../user/model");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/user", (request, response, next) => {
  console.log("Welcome from User-router.js; message created by router.POST");
  const user = {
    email: request.body.email,
    password: bcrypt.hashSync(request.body.password, 10)
  };
  User.create(user)
    .then(user => {
      response.status(200).send(user);
    })
    .catch(next);
});

console.log("Connected to User-router.js");

module.exports = router;
