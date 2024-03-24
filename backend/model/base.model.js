const mongoose = require("mongoose");

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

const Base = mongoose.model("Base", BaseSchema);

module.exports = Base;
