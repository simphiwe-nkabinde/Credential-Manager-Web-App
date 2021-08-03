const express = require('express');
const router = express.Router();
const newsManagementController = require('../controllers/newsManagementController')
const auth = require('../middleware/authMiddleware')

/**
 * @route /news-management
 * @desc list all division names for the news management unit
 * @access public
 */
router.get('/', auth.user, newsManagementController.list);

/**
 * @route /news-management/divisionName
 * @desc list all credential data for specified divisionName
 * @access private admin. & users with access to division
 */
 router.get('/:divisionName', auth.newsManagement, newsManagementController.listCredentials);

/**
 * @route /news-management/divisionName
 * @desc update credentials for specified division
 * @access private admin & management
 */
router.put('/:divisionName', auth.adminManagement, newsManagementController.updateCredentials);

/**
 * @route /software-review/:divisionName
 * @desc create a new credential for specified divsion
 * @access public
 */
 router.post('/:divisionName', auth.newsManagement, newsManagementController.createCredential);



module.exports = router;