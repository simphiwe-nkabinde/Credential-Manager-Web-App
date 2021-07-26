const express = require('express');
const router = express.Router();
const opinionPublishingController = require('../controllers/opinionPublishingController')

/**
 * @route /opinion-publishing
 * @desc list all divisions for the news management unit
 * @access public
 */
router.get('/', opinionPublishingController.list);

/**
 * @route /opinion-publishing/:divisionName
 * @desc list all credential data for specified divisionName
 * @access private admin & users with access to division
 */
 router.get('/:divisionName', opinionPublishingController.listCredentials);

/**
 * @route /opinion-publishing/:divisionName
 * @desc update user role (admin, management, user)
 * @access private admin only
 */
router.put('/:divisionName', opinionPublishingController.updateCredentials);



module.exports = router;