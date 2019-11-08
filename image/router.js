const { Router } = require("express");
const Image = require("./model");

const router = new Router();

router.get("/image", (request, response, next) => {
  console.log("Welcome from router.js; message created by router.GET");
  Image.findAll()
    .then(images => {
      response.status(200).send(images);
    })
    .catch(next);
});

router.post("/image", (request, response, next) => {
  console.log("Welcome from router.js; message created by router.POST");
  Image.create(request.body)
    .then(image => {
      response.status(200).send(image);
    })
    .catch(next);
});

console.log("Connected to router.js");

module.exports = router;
