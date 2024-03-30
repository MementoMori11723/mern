// import mongoose
const mongoose = require("mongoose");

// create a Data schema
const DataSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    data: {
      type: [mongoose.Schema.Types.Mixed],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = DataSchema;
