// import express and functions from controller
const express = require("express");
const {
  fetchAllComments,
  fetchAllProducts,
} = require("../controller/data/imports");

// create a dataRouter
const dataRouter = express.Router();

// define routes
// get all Products
dataRouter.get("/", fetchAllProducts);

// get comments
dataRouter.get("/comments", fetchAllComments);

// export the dataRouter
module.exports = dataRouter;
