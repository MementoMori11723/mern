// import express and functions from controller
const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/db.controller");

// create a router
const router = express.Router();

// define routes
// create a user
router.post("/", createUser);

// get all users
router.get("/", getUsers);

// get a user by id
router.get("/:id", getUserById);

// update a user by id
router.put("/:id", updateUser);

// delete a user by id
router.delete("/:id", deleteUser);

// export the router
module.exports = router;
