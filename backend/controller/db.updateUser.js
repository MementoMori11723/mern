// import Base model
const { User } = require("../model/db.model");

// update a user by id function
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findByIdAndUpdate(id, req.body);
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

module.exports = updateUser;
