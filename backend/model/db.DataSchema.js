// import mongoose
const mongoose = require("mongoose");

// create a Data schema
const DataSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    cart: {
      type: [mongoose.Schema.Types.Mixed],
      required: false,
    },
    purchases: {
      type: [mongoose.Schema.Types.Mixed],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = DataSchema;
