const express = require('express')
const router = express.Router();
const {userSignup,userLogin,adminSignup,adminLogin} =require ("../controllers/registrationController");


router.post("/userSignup", userSignup);
router.post("/userLogin", userLogin);
router.post("/adminSignup", adminSignup);
router.post("/adminLogin", adminLogin);



module.exports = router;