const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// configuring body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, async () => {
  console.log(`Server is running on port ${process.env.PORT}`);

  try {
    await mongoose.connect(process.env.DB_URL, {
      dbName: process.env.DB_NAME,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
