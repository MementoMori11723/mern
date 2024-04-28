// import Base model
const { User, Data } = require("../../model/db.model");

// get all users function
const getUsers = async (_, res) => {
  try {
    const data = await User.find({});
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
    const data = await User.find({ _id: id });
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

// get all data by id function
const getDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Data.find({ _id: id });
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

module.exports = { getUsers, getUserById, getDataById };
