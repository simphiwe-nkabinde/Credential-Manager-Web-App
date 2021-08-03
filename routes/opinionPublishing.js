const express = require('express');
const router = express.Router();
const opinionPublishingController = require('../controllers/opinionPublishingController')
const auth = require('../middleware/authMiddleware')

/**
 * @route /opinion-publishing
 * @desc list all division names for the news management unit
 * @access public
 */
router.get('/', auth.user, opinionPublishingController.list);

/**
 * @route /opinion-publishing/:divisionName
 * @desc list all credential data for specified divisionName
 * @access private admin & users with access to division
 */
 router.get('/:divisionName', auth.opinionPublishing, opinionPublishingController.listCredentials);

/**
 * @route /opinion-publishing/:divisionName
 * @desc update user role (admin, management, user)
 * @access private admin & management
 */
router.put('/:divisionName', auth.adminManagement, opinionPublishingController.updateCredentials);

/**
 * @route /software-review/:divisionName
 * @desc create a new credential for specified divsion
 * @access public
 */
 router.post('/:divisionName', auth.opinionPublishing, opinionPublishingController.createCredential);



module.exports = router;