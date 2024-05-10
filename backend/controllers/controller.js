const City = require("../models/cityModel");
const Country = require("../models/countryModel");
const State = require("../models/stateModel");

const getCountries = async (req, res) => {
  try {
    const countries = await Country.find({});
    res
      .status(200)
      .send({ success: true, msg: "Countries Data", data: countries });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

const getStates = async (req, res) => {
  try {
    const states = await State.find({ country_name: req.body.country_code });
    res.status(200).send({ success: true, msg: "States Data", data: states });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

const getCities = async (req, res) => {
  try {
    const cities = await City.find({ state_name: req.body.state_name });
    res.status(200).send({ success: true, msg: "Cities Data", data: cities });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};
module.exports = { getCountries, getStates, getCities };
