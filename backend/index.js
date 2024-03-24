const express = require("express");
const mongoose = require("mongoose");
const Base = require("./model/base.model");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const port = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://yasasvigumma:pt1w4gOo9PwugUCT@merlin.y6yvre0.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
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

app.get("/api/base/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Base.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.put("/api/base/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Base.findByIdAndUpdate(id, req.body, { new: true });
    if (!data) {
      return res.status(404).json({ message: "user not found!" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/api/base/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Base.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ message: "user not found!" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
