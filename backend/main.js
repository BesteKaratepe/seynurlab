const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./svc/routes/authRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
