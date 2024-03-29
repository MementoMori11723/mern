// import mongoose
const mongoose = require("mongoose");

// import schemas
const UserSchema = require("./db.UserSchema");
const DataSchema = require("./db.DataSchema");

// create a model
const User = mongoose.model("User", UserSchema);
const Data = mongoose.model("Data", DataSchema);

// export the model
module.exports = { User, Data };
