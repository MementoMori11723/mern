// import Base model
const { User, Data } = require("../../model/db.model");

// create a user function
const createUser = async (req, res) => {
  try {
    // check if user already exists
    const user = await User.find({ id: req.body.id });
    if (!user) {
      const UserData = await User.create({
        id: req.body.id,
        userName: req.body.userName,
        password: req.body.password,
        profilePic: req.body?.profilePic || "",
      });
      const data = await Data.create({
        id: UserData?.id || UserData._id,
        data: [],
      });
      res.status(200).json({
        message: "user & data created!",
        userId: UserData._id,
        dataId: data._id,
      });
    } else {
      res.status(409).json({ message: "user already exists!" });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createUser };
