const express = require("express");
const authController = require("../controllers/authController");
const dataController = require("../controllers/dataController");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/posts", verifyToken, dataController.getPosts);

module.exports = router;
