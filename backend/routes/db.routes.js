// import express and functions from controller
const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/db/imports");

// create a dbRouter
const dbRouter = express.Router();

// define routes
// create a user
dbRouter.post("/", createUser);

// get all users
dbRouter.get("/", getUsers);

// get a user by id
dbRouter.get("/:id", getUserById);

// update a user by id
dbRouter.put("/:id", updateUser);

// delete a user by id
dbRouter.delete("/:id", deleteUser);

// export the dbRouter
module.exports = dbRouter;
