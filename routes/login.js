const express = require('express');
const router = express.Router();
const authController =  require('../controllers/loginController');

/**
 * @route /login
 * @desc verifies user credentials and sends jwt to client
 * @access public
 */
 router.post('/', authController.loginAuth);

 module.exports = router;