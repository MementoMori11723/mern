// import CreateUser function
const { createUser } = require("./create");

// import GetUser functions
const { getUsers, getUserById, getDataById } = require("./get");

// import UpdateUser function
const { updateUser, updateData, popData } = require("./update");

// import DeleteUser function
const { deleteUser, deleteAll } = require("./delete");

// export functions
module.exports = {
  createUser,
  getUsers,
  getUserById,
  getDataById,
  updateUser,
  updateData,
  popData,
  deleteUser,
  deleteAll,
};
