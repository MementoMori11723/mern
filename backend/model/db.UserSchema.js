// import mongoose
const mongoose = require("mongoose");

// create a User schema
const UserSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    profilePic: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserSchema;
