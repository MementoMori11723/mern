const mongoose = require("mongoose");

const BaseSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: [true, "Please enter item id"],
    },
    title: {
      type: String,
      required: [true, "Please enter title of the item"],
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    discountPercentage: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: false,
    },
    images: {
      type: Array < String > [],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Base = mongoose.model("Base", BaseSchema);

module.exports = Base;
