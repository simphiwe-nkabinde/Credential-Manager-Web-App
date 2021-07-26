const express = require('express');
const router = express.Router();
const softwareReviewController = require('../controllers/softwareReviewController')

/**
 * @route /software-review
 * @desc list all divisions for the news management unit
 * @access public
 */
router.get('/', softwareReviewController.list);

/**
 * @route /software-review/:divisionName
 * @desc list all credential data for specified divisionName
 * @access private admin & users with access to division
 */
 router.get('/:divisionName', softwareReviewController.listCredentials);

/**
 * @route /software-review/:divisionName
 * @desc update user role (admin, management, user)
 * @access private admin only
 */
router.put('/:divisionName', softwareReviewController.updateCredentials);



module.exports = router;