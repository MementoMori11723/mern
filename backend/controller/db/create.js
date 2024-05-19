// import Base model
const { User, Data } = require("../../model/db.model");
const { auth } = require("../../firebase-config");
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");

// create a user function
const createUser = async (req, res) => {
  try {
    // creating a login / register function
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createUser };
