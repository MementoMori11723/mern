// fetch all comments from the dummyjson api
const fetchAllComments = async (req, res) => {
  try {
    const data = await fetch("https://dummyjson.com/comments").then((res) =>
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
module.exports = fetchAllComments;
