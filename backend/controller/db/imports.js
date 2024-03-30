// import CreateUser function
const createUser = require("./create");

// import GetUser functions
const { getUsers, getUserById } = require("./get");

// import UpdateUser function
const updateUser = require("./update");

// import DeleteUser function
const deleteUser = require("./delete");

// export functions
module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
