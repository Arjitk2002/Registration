const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes.js");
mongoose.connect("mongodb://localhost:27017/DData");

const dependencyRoute = require("./routes/droutes.js");
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET , POST, PUT",
  credentials: true,
};
app.use(cors(corsOptions));
app.use("/api", dependencyRoute);
app.use("/api/users", userRoutes);
app.listen(3000, () => {
  console.log("Server is running");
});
