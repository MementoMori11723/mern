// importing libraries
const express = require("express");
const mongoose = require("mongoose");
const Base = require("./model/base.model");
const router = require("./routes/base.routes");

// environment variables
require("dotenv").config();
const port = process.env.PORT || 5000;

// initialize express
const app = express();

// middleware
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// routes
app.use("/api/base", router);

// connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () =>
      console.log(`App listening at http://localhost:${port}`)
    );
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
