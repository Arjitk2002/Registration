const mongoose = require("mongoose");

const stateSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country_name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("State", stateSchema);
