const express = require('express');
const router = express.Router();
const newsManagementController = require('../controllers/newsManagementController')

/**
 * @route /news-management
 * @desc list all divisions for the news management unit
 * @access public
 */
router.get('/', newsManagementController.list);

/**
 * @route /news-management/:divisionName
 * @desc list all credential data for specified divisionName
 * @access private admin & users with access to division
 */
 router.get('/:divisionName', newsManagementController.listCredentials);

/**
 * @route /news-management/:divisionName
 * @desc update user role (admin, management, user)
 * @access private admin only
 */
router.put('/:divisionName', newsManagementController.updateCredentials);



module.exports = router;