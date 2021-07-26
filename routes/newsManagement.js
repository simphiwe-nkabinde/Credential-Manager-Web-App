const express = require('express');
const router = express.Router();
const newsManagementController = require('../controllers/newsManagementController')

/**
 * @route /news-management
 * @desc list all division names for the news management unit
 * @access public
 */
router.get('/', newsManagementController.list);

/**
 * @route /news-management/divisionId
 * @desc list all credential data for specified divisionName
 * @access private admin & users with access to division
 */
 router.get('/:divisionId', newsManagementController.listCredentials);

/**
 * @route /news-management/divisionId
 * @desc update user role (admin, management, user)
 * @access private admin only
 */
router.put('/:divisionId', newsManagementController.updateCredentials);

/**
 * @route /software-review/:divisionId
 * @desc create a new credential for specified divsion
 * @access public
 */
 router.post('/:divisionId', newsManagementController.createCredential);



module.exports = router;