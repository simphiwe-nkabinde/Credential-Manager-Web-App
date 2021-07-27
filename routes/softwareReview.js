const express = require('express');
const router = express.Router();
const softwareReviewController = require('../controllers/softwareReviewController')
const auth = require('../middleware/authMiddleware')

/**
 * @route /software-review
 * @desc list all division names for the news management unit
 * @access public
 */
router.get('/', softwareReviewController.list);

/**
 * @route /software-review/:divisionName
 * @desc list all credentials for specified division
 * @access private admin & users with access to division
 */
 router.get('/:divisionName', auth.softwareReviews, softwareReviewController.listCredentials);

/**
 * @route /software-review/:divisionName
 * @desc update credentials for specified division
 * @access private admin & management
 */
router.put('/:divisionName', auth.adminManagement, softwareReviewController.updateCredentials);

/**
 * @route /software-review/:divisionName
 * @desc create new credential for specified divsion
 * @access public
 */
router.post('/:divisionName', auth.softwareReviews, softwareReviewController.createCredential);



module.exports = router;