// fetch all products from the dummyjson api
const fetchAllProducts = async (req, res) => {
  try {
    const data = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// export the function
module.exports = fetchAllProducts;
