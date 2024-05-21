// import Base model
const { User, Data } = require("../../model/db.model");
const { auth } = require("../../firebase-config");
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");

const firebaseAuth = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    return error;
  }
};

// create a user function
const createUser = async (req, res) => {
  try {
    // creating a login / register function
    await firebaseAuth(req.body.email, req.body.password);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createUser };
