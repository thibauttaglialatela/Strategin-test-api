const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const userCtrl = require("../controllers/user");

router.post("/register", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/users", auth, userCtrl.findAllUsers);

module.exports = router;
