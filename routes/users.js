const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @route /users
 * @desc list all users
 * @access admin only
 */
router.get('/', userController.list);

/**
 * @route /users/:id/role
 * @desc update user role (admin, management, user)
 * @access admin only
 */
router.put('/:role/:id/', userController.updateRole);

 /**
 * @route /users/:id/ou
 * @desc update divisions in selected (OU)Organisational Unit
 * @access admin only
 */
router.put('/ou/:id', userController.updateOU);

 /**
 * @route /users/register
 * @desc register new user
 * @access public
 */
  router.post('/create', userController.create);





module.exports = router;