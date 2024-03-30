// importing all the functions from the files in the data folder
const fetchAllComments = require("./comments");
const fetchAllProducts = require("./products");

// exporting all the functions
module.exports = {
  fetchAllComments,
  fetchAllProducts,
};
