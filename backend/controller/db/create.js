// import Base model
const { User } = require("../model/db.model");

// create a user function
const createUser = async (req, res) => {
  try {
    const data = await User.create(req.body);
    res.status(200).json({ message: "user created!", userId: data._id });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = createUser;
