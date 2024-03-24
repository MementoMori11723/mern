const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

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
