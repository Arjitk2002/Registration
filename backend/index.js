const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
mongoose.connect("mongodb://localhost:27017/DData");

const dependencyRoute = require("./routes/droutes.js");
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use("/api", dependencyRoute);
app.listen(3000, () => {
  console.log("Server is running");
});
