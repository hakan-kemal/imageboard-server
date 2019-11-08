const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const User = require("../user/model");
const bcrypt = require("bcrypt");
const auth = require("./middleware");

const router = new Router();

router.post("/login", (request, response) => {
  console.log("Welcome from User-router.js; message created by router.POST");
  //   const { email, password } = request.body;

  //   const email = request.body.email
  //   const password = request.body.password

  User.findOne({
    where: {
      email: request.body.email
    }
  })
    .then(user => {
      if (!user) {
        //   if (!email && !password) {
        // return
        return response.status(400).send({
          message: "Please supply a valid email and password"
        });
      } else if (bcrypt.compareSync(request.body.password, user.password)) {
        // 3. if the password is correct, return a JWT with the userId of the user (user.id)
        return response.send({
          jwt: toJWT({ userId: user.id })
        });
      } else {
        return response.status(400).send({
          message: "Password was incorrect"
        });
      }
    })
    .catch(error => {
      console.error(error);
      response.status(500).send({
        message: "Something went wrong"
      });
    });
  //   else {
  //     const { id } = 1;
  //     const jwt = toJWT({ userId: id });
  //     response.status(200).send({ jwt });
  //   }
  // })
  //     .catch(next);
});

// router.get("/secret-endpoint", (request, response) => {
//   const auth =
//     request.headers.authorization && request.headers.authorization.split(" ");
//   if (auth && auth[0] === "Bearer" && auth[1]) {
//     const data = toData(auth[1]);
//     response.status(200).send({
//       message: "Thanks for visiting the secret endpoint.",
//       data
//     });
//   } else {
//     response.status(401).send({
//       message: "Please supply some valid credentials"
//     });
//   }
// });

router.get("/secret-endpoint", auth, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`
  });
});

console.log("Connected to Auth-router.js");

module.exports = router;
