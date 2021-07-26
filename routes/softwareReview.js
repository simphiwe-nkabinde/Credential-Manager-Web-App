const express = require('express');
const router = express.Router();
const softwareReviewController = require('../controllers/softwareReviewController')

/**
 * @route /software-review
 * @desc list all division names for the news management unit
 * @access public
 */
router.get('/', softwareReviewController.list);

/**
 * @route /software-review/:divisionId
 * @desc list all credential data for specified division
 * @access private admin & users with access to division
 */
 router.get('/:divisionId', softwareReviewController.listCredentials);

/**
 * @route /software-review/:divisionName
 * @desc update credentials for specified division
 * @access private admin only
 */
router.put('/:divisionId', softwareReviewController.updateCredentials);

/**
 * @route /software-review/:divisionId
 * @desc create a new credential for specified divsion
 * @access public
 */
router.post('/:divisionId', softwareReviewController.createCredential);



module.exports = router;