const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDjK9ewRwzgRcLdA9X9dv6OC5szE0bxQ58",
  authDomain: "mern-342e9.firebaseapp.com",
  projectId: "mern-342e9",
  storageBucket: "mern-342e9.appspot.com",
  messagingSenderId: "1012064809945",
  appId: "1:1012064809945:web:49aa9f57c587d9384f1fc8",
  measurementId: "G-8NQM6HC9VD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { auth };
