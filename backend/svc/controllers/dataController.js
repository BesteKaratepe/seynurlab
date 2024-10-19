const axios = require("axios");

exports.getPosts = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("An error occurred during the request.");
  }
};
