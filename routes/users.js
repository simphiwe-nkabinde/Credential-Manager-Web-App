const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware')

/**
 * @route /users
 * @desc list all users
 * @access admin only
 */
router.get('/', auth.admin, userController.list);

/**
 * @route /users/:id/role
 * @desc update user role (admin, management, user)
 * @access private admin only
 */
router.put('/:role/:id/', auth.admin, userController.updateRole);

 /**
 * @route /users/:id/ou
 * @desc update divisions in selected (OU)Organisational Unit
 * @access private admin only
 */
router.put('/ou/:id', auth.admin, userController.updateOU);

 /**
 * @route /users/register
 * @desc register new user
 * @access public
 */
  router.post('/register', userController.create);





module.exports = router;