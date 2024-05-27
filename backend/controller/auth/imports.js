const { User, Data } = require("../../model/db.model");
const { auth } = require("../../firebase-config");
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
