const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");

router.post("/login", userController.login);
router.post("/getuser", userController.getuser);
router.post("/register", userController.register);

module.exports = router;
