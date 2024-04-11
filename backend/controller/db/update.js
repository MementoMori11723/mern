// import Base model
const { User, Data } = require("../../model/db.model");

// update a user by id function
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    if (update.userName) {
      console.log(update.userName);
      await User.findOneAndUpdate({ id: id }, { userName: update.userName });
    } else if (update.password) {
      await User.findOneAndUpdate({ id: id }, { password: update.password });
    } else {
      await User.findOneAndUpdate(
        { id: id },
        { profilePic: update.profilePic }
      );
    }
    res.status(200).json({ message: "user updated!", userId: id });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// update data by id function
const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const getData = await fetch(`http://localhost:8080/api/db/data/${id}`)
      .then((res) => res.json())
      .then((data) => data[0].data);
    const newData = getData ? [...getData, req.body] : [req.body];
    await Data.findOneAndUpdate({ id: id }, { data: newData });
    res.status(200).json({ message: "Data updated!", dataId: id });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const popData = async (req, res) => {
  try {
    const { id } = req.params;
    await Data.findOneAndUpdate({ id: id }, { data: [] });
    res.status(200).json({ message: "Data removed!", dataId: id });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { updateUser, updateData, popData };
