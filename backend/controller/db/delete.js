// import Base model
const { User } = require("../../model/db.model");

// delete a user by id function
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findByIdAndDelete(id);
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

module.exports = deleteUser;
