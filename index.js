const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Movie = require("./models/movie.model");
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

    await Movie.create({
      name: "Inception",
      description: "A mind-bending thriller",
      casts: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      trailerUrls: ["https://example.com/trailer1"],
      language: "English",
      releaseDate: "2010-07-16",
      director: "Christopher Nolan",
      releaseStatus: "Released",
    });
    console.log("Sample movie created");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
