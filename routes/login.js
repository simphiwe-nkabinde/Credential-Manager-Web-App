const express = require('express');
const router = express.Router();
const authController =  require('../controllers/loginController');

/**
 * @route /auth/login
 * @desc register new user
 * @access public
 */
 router.post('/login', authController.loginAuth);

 module.exports = router;