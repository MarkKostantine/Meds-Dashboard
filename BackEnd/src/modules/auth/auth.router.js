const { Router } = require("express");
const authController = require("../auth/controller/auth.js");

const router = Router();

//get send data in url
//post send more Security

router.post("/signUp", authController.signUp);

router.post("/logIn", authController.logIn);

module.exports = router;
