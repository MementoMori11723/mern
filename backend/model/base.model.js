// import mongoose
const mongoose = require("mongoose");

// create a schema
const BaseSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    data: {
      type: [mongoose.Schema.Types.Mixed],
      required: false,
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

// create a model
const Base = mongoose.model("Base", BaseSchema);

// export the model
module.exports = Base;
