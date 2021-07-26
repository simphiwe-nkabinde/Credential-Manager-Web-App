const express = require('express');
const router = express.Router();
const hardwareReviewController = require('../controllers/hardwareReviewController')

/**
 * @route /hardware-review
 * @desc list all division names for the news management unit
 * @access public
 */
router.get('/', hardwareReviewController.list);

/**
 * @route /hardware-review/divisionId
 * @desc list all credential data for specified divisionName
 * @access private admin & users with access to division
 */
 router.get('/:divisionId', hardwareReviewController.listCredentials);

/**
 * @route /hardware-review/divisionId
 * @desc update user role (admin, management, user)
 * @access private admin only
 */
router.put('/:divisionId', hardwareReviewController.updateCredentials);

/**
 * @route /software-review/:divisionId
 * @desc create a new credential for specified divsion
 * @access public
 */
 router.post('/:divisionId', hardwareReviewController.createCredential);



module.exports = router;