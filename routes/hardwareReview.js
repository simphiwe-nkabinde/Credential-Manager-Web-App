const express = require('express');
const router = express.Router();
const hardwareReviewController = require('../controllers/hardwareReviewController')

/**
 * @route /hardware-review
 * @desc list all divisions for the news management unit
 * @access public
 */
router.get('/', hardwareReviewController.list);

/**
 * @route /hardware-review/:divisionName
 * @desc list all credential data for specified divisionName
 * @access private admin & users with access to division
 */
 router.get('/:divisionName', hardwareReviewController.listCredentials);

/**
 * @route /hardware-review/:divisionName
 * @desc update user role (admin, management, user)
 * @access private admin only
 */
router.put('/:divisionName', hardwareReviewController.updateCredentials);



module.exports = router;