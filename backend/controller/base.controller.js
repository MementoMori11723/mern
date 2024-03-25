// import Base model
const Base = require("../model/base.model");

// create a user function
const createUser = async (req, res) => {
  try {
    const data = await Base.create(req.body);
    res.status(200).json({ message: "user created!", userId: data._id });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get all users function
const getUsers = async (_, res) => {
  try {
    const data = await Base.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get a user by id function
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Base.findById(id);
    if (!data) {
      return res.status(404).json({ message: "user not found!" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// update a user by id function
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Base.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res.status(404).json({ message: "user not found!" });
    }
    res.status(200).json({ message: "user updated!", userId: data._id });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// delete a user by id function
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Base.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ message: "user not found!" });
    }
    res.status(200).json({ message: "user deleted!", userId: data._id });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// export functions
module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
