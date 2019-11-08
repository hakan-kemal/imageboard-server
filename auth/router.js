const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const User = require("./model");

const router = new Router();

router.post("/login", (request, response, next) => {
  console.log("Welcome from User-router.js; message created by router.POST");
  const { email, password } = request.body;

  User.findOne({ where: { email, password } })
    .then(user => {
      if (!user) {
        return response.status(400).send({
          message: "Please supply a valid email and password"
        });
      } else {
        const { id } = user;
        const jwt = toJWT({ userId: id });
        response.status(200).send({ jwt });
      }
    })
    .catch(next);
});

module.exports = router;
