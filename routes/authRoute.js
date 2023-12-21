const express = require('express');
const {createUser} = require("../controller/userCtrl")
const router = express.Router();


router.post("/register", createUser);    //exported from userCtrl.js
module.exports = router;