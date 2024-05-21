const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

require("dotenv").config();

const apiKey = process.env.FIREAPI;
const appId = process.env.FIREID;
const measurementId = process.env.FIREMESUREID;
const messagingSenderId = process.env.FIREMESSAGEID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "mern-342e9.firebaseapp.com",
  projectId: "mern-342e9",
  storageBucket: "mern-342e9.appspot.com",
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { auth };
