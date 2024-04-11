// import Base model
const { User, Data } = require("../../model/db.model");

// delete a user by id function
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne({ id: id });
    await Data.deleteOne({ id: id });
    res.status(200).json({ message: "User & Data deleted!", userId: id });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// delete all data function
const deleteAll = async (req, res) => {
  try {
    await User.deleteMany({});
    await Data.deleteMany({});
    res.status(200).json({ message: "all user deleted!" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { deleteUser, deleteAll };
