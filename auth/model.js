const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

console.log("Connected to User-model.js");

module.exports = User;
