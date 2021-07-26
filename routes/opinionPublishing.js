const express = require('express');
const router = express.Router();
const opinionPublishingController = require('../controllers/opinionPublishingController')

/**
 * @route /opinion-publishing
 * @desc list all division names for the news management unit
 * @access public
 */
router.get('/', opinionPublishingController.list);

/**
 * @route /opinion-publishing/:divisionId
 * @desc list all credential data for specified divisionName
 * @access private admin & users with access to division
 */
 router.get('/:divisionId', opinionPublishingController.listCredentials);

/**
 * @route /opinion-publishing/:divisionId
 * @desc update user role (admin, management, user)
 * @access private admin only
 */
router.put('/:divisionId', opinionPublishingController.updateCredentials);

/**
 * @route /software-review/:divisionId
 * @desc create a new credential for specified divsion
 * @access public
 */
 router.post('/:divisionId', opinionPublishingController.createCredential);



module.exports = router;