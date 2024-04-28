// import Base model
const { User, Data } = require("../../model/db.model");

// update a user by id function
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    if (update.userName) {
      console.log(update.userName);
      await User.findOneAndUpdate({ _id: id }, { userName: update.userName });
    } else if (update.password) {
      await User.findOneAndUpdate({ _id: id }, { password: update.password });
    } else {
      await User.findOneAndUpdate(
        { _id: id },
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
    const exd = await Data.findById(id);
    if (!exd) {
      return res.status(404).json({ message: "Data not found" });
    }
    const { cart, purchases } = exd.data;
    const newData = {
      cart: Array.isArray(cart) ? [...cart, req.body.cart] : [req.body.cart],
      purchases: Array.isArray(purchases) ? req.body.purchases ? [...purchases, req.body.purchases] : [...purchases] : [req.body.purchases]
    };
    newData.purchases = newData.purchases.filter(item => item !== null);
    await Data.findByIdAndUpdate(id, { data: newData });
    res.status(200).json({ message: "Data updated!", dataId: id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const popData = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = await Data.findById(id);
    if (!dataToUpdate) {
      return res.status(404).json({ message: "Data not found" });
    }
    const cartItems = dataToUpdate.data.cart;
    dataToUpdate.data.purchases = dataToUpdate.data.purchases.concat(cartItems);
    dataToUpdate.data.cart = [];
    dataToUpdate.data.purchases = dataToUpdate.data.purchases.filter(item => item !== null && item.length !== 0);
    await dataToUpdate.save();
    res.status(200).json({ message: "Data removed and moved to purchase history!", dataId: id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = { updateUser, updateData, popData };
