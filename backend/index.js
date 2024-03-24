const express = require("express");
const mongoose = require("mongoose");
const Base = require("./model/base.model");
require("dotenv").config();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://yasasvigumma:pt1w4gOo9PwugUCT@merlin.y6yvre0.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`App lising at http://localhost:${port}`);
    });
  });

app.post("/api/base", async (req, res) => {
  try {
    const data = await Base.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/api/base", async (req, res) => {
  try {
    const data = await Base.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
