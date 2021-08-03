const express = require('express');
const router = express.Router();
const hardwareReviewController = require('../controllers/hardwareReviewController')
const auth = require('../middleware/authMiddleware')

/**
 * @route /hardware-review
 * @desc list all division names for the news management unit
 * @access public
 */
router.get('/', auth.user, hardwareReviewController.list);

/**
 * @route /hardware-review/divisionName
 * @desc list all credential data for specified divisionName
 * @access private admin & users with access to division
 */
 router.get('/:divisionName', auth.hardwareReviews, hardwareReviewController.listCredentials);

/**
 * @route /hardware-review/divisionId
 * @desc update credentials
 * @access private admin & management
 */
router.put('/:divisionName', auth.adminManagement, hardwareReviewController.updateCredentials);

/**
 * @route /software-review/:divisionName
 * @desc create a new credential for specified divsion
 * @access public
 */
 router.post('/:divisionName', auth.hardwareReviews, hardwareReviewController.createCredential);



module.exports = router;