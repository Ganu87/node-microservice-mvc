const express = require('express');
const router = express.Router();
const validateRequest = require("../middleware/validateRequest");
const userController = require('../controllers/userController');
const userSchema = require("../schema/userSchema");



router.post('/',validateRequest(userSchema), userController.addUser);
router.get('/',userController.getAllUsers);
router.get('/:id',userController.getUserById);

module.exports=router;