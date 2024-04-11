// import express and functions from controller
const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  getDataById,
  updateUser,
  updateData,
  popData,
  deleteUser,
  deleteAll,
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

// get all data by id
dbRouter.get("/data/:id", getDataById);

// update a user by id
dbRouter.put("/:id", updateUser);

// update data by id
dbRouter.put("/data/:id", updateData);

// remove data by id
dbRouter.put("/data/pop/:id", popData);

// delete all users
dbRouter.delete("/", deleteAll);

// delete a user by id
dbRouter.delete("/:id", deleteUser);

// export the dbRouter
module.exports = dbRouter;
