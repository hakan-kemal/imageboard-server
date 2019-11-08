const Sequelize = require("sequelize");
const db = require("../db");

const Image = db.define(
  "image",
  {
    url: {
      type: Sequelize.STRING,
      field: "image_url"
    },
    title: {
      type: Sequelize.STRING,
      field: "image_title"
    }
  },
  { tableName: "imageboard" }
);

console.log("Connected to model.js");

module.exports = Image;
