// import CreateUser function
const createUser = require("./db.createUser");

// import GetUser functions
const { getUsers, getUserById } = require("./db.getUser");

// import UpdateUser function
const updateUser = require("./db.updateUser");

// import DeleteUser function
const deleteUser = require("./db.deleteUser");

// export functions
module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
