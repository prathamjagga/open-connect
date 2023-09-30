const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");

router.get("/get-one/:ghUsername", userController.getProfile);
router.post("/addProfile", userController.addProfile);
router.get("/get-all", userController.getAllProfiles);

module.exports = router;
