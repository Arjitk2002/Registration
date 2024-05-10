const express = require("express");
const router = express.Router();
const User = require("../models/userModel.js");

router.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, country, state, city, gender, dob } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create a new user
    const newUser = new User({
      fname,
      lname,
      email,
      country,
      state,
      city,
      gender,
      dob,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
