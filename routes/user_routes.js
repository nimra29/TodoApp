const express = require("express");
const router = express.Router();
const userController =require('../controllers/user_controller')
// create a user
router.post('/sign_up',userController.createUser);
router.post('/sign_in',userController.loginUser);

module.exports=router;