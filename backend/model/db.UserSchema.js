// import mongoose
const mongoose = require("mongoose");

// create a User schema
const UserSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
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

export default UserSchema;
