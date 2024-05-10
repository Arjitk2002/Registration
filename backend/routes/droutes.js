const express = require("express");
const d_route = express();

const bodyParser = require("body-parser");
d_route.use(bodyParser.json());
d_route.use(bodyParser.urlencoded({ extended: true }));
const {
  getCountries,
  getStates,
  getCities,
} = require("../controllers/controller.js");
d_route.get("/get-countries", getCountries);
d_route.put("/get-states", getStates);
d_route.put("/get-cities", getCities);

module.exports = d_route;
