const jwt = require('jsonwebtoken');
const jwsSecret = 'jwt-cred-man-app';

/**
 * @middleware authMiddleware
 * @desc :: Server-side logic for authenticating users.
 */
module.exports = {

    /**
     * @authenticator adminAuth(req, res, next)
     * @desc Authenticate admin user
     * @req { headers['authorization'] }
     */
    admin: function(req, res, next)  {
        //check for token
        if(!req.headers['authorization']) {
            return res.status(401).json({
                error : 'No token, authorization denied',
                msg : 'You are not logged in correctly. Try loggin in again'
            })
        }

        const token = req.headers['authorization'].split(' ')[1];
        //verify admin user
        try {
            const decoded = jwt.verify(token, jwsSecret)
            if (decoded.role === 'admin') {
                next()
            } else {
                res.status(400).json({
                    error : 'Access to endpoint is admin only. Authorization denied',
                    msg: 'Access to this page is restricted. Login as admin to access this page'
                })
            }
        } catch(err) {
            res.status(400).json({
                error : err,
                msg: 'Token Invalid. Try loggin in again'
            })
        }
    },

    /**
     * @authenticator adminManagementAuth(req, res, next)
     * @desc Authenticate admin or management user
     * @req { headers['authorization'] }
     */
    adminManagement: function(req, res, next)  {
        //check for token
        if(!req.headers['authorization']) {
            return res.status(401).json({
                error : 'No token, authorization denied',
                msg : 'You are not logged in correctly. Try loggin in again'
            })
        }

        const token = req.headers['authorization'].split(' ')[1];
        //verify admin or management user
        try {
            const decoded = jwt.verify(token, jwsSecret)
            if (decoded.role === 'admin' || decoded.role === 'management') {
                next()
            } else {
                res.status(400).json({
                    error : 'Access to endpoint for admin & management only. Authorization denied',
                    msg: 'Access to this page is restricted. Login as admin or management to access this page'
                })
            }
        } catch(err) {
            res.status(400).json({
                error : err,
                msg: 'Token Invalid. Try loggin in again'
            })
        }
    },

    user: function(req, res, next) {
        //check for token
        if(!req.headers['authorization']) {
            return res.status(401).json({
                error : 'No token, authorization denied',
                msg : 'You are not logged in correctly. Try loggin in again'
            })
        }

        const token = req.headers['authorization'].split(' ')[1];
        //verify token
        try {
            const decoded = jwt.verify(token, jwsSecret)
            next()
        } catch(err) {
            res.status(400).json({
                error : err,
                msg: 'Token Invalid. Try loggin in again'
            })
        }
    },

    /**
     * @authenticator newsManagementAuth(req, res, next)
     * @desc Authenticate user with access to /:divisionName division of news Management unit
     * @req { headers['authorization'],  params.divisionName}
     */
    newsManagement: function(req, res, next)  {
        const divName = req.params.divisionName
        //check for token
        if(!req.headers['authorization']) {
            return res.status(401).json({
                error : 'No token, authorization denied',
                msg : 'You are not logged in correctly. Try loggin in again'
            })
        }

        const token = req.headers['authorization'].split(' ')[1];
        //verify admin or user with access to division
        try {
            const decoded = jwt.verify(token, jwsSecret)
            if (decoded.role === 'admin') {
                next()
            } else if (decoded.ou['newsManagement'].includes(divName)) {
                next()
            } else {
                res.status(400).json({
                    error: 'Authorization denied',
                    msg : 'You do not have access to this '+ divName +' division page. Access is limited to assigned users'
                })
            }
        } catch(err) {
            res.status(400).json({
                error : err,
                msg: 'Token Invalid. Try loggin in again'
            })
        }
    },

    /**
     * @authenticator softwareReviewsAuth(req, res, next)
     * @desc Authenticate user with access to /:divisionName division of software reviews unit
     * @req { headers['authorization'],  params.divisionName}
     */
    softwareReviews: function(req, res, next)  {
        const divName = req.params.divisionName
        //check for token
        if(!req.headers['authorization']) {
            return res.status(401).json({
                error : 'No token, authorization denied',
                msg : 'You are not logged in correctly. Try loggin in again'
            })
        }

        const token = req.headers['authorization'].split(' ')[1];
        //verify admin or user with access to division
        try {
            const decoded = jwt.verify(token, jwsSecret)
            if (decoded.role === 'admin') {
                next()
            } else if (decoded.ou['softwareReviews'].includes(divName)) {
                next()
            } else {
                res.status(400).json({
                    error: 'Authorization denied',
                    msg : 'You do not have access to this '+ divName +' division page. Access is limited to assigned users'
                })
            }
        } catch(err) {
            res.status(400).json({
                error : err,
                msg: 'Token Invalid. Try loggin in again'
            })
        }
    },

    /**
     * @authenticator hardwareReviewsAuth(req, res, next)
     * @desc Authenticate user with access to /:divisionName division of hardware Reviews unit
     * @req { headers['authorization'],  params.divisionName}
     */
    hardwareReviews: function(req, res, next)  {
        const divName = req.params.divisionName
        //check for token
        if(!req.headers['authorization']) {
            return res.status(401).json({
                error : 'No token, authorization denied',
                msg : 'You are not logged in correctly. Try loggin in again'
            })
        }

        const token = req.headers['authorization'].split(' ')[1];
        //verify admin or user with access to division
        try {
            const decoded = jwt.verify(token, jwsSecret)
            if (decoded.role === 'admin') {
                next()
            } else if (decoded.ou['hardwareReviews'].includes(divName)) {
                next()
            } else {
                res.status(400).json({
                    error: 'Authorization denied',
                    msg : 'You do not have access to this '+ divName +' division page. Access is limited to assigned users'
                })
            }
        } catch(err) {
            res.status(400).json({
                error : err,
                msg: 'Token Invalid. Try loggin in again'
            })
        }
    },

    /**
     * @authenticator opinionPublishingAuth(req, res, next)
     * @desc Authenticate user with access to /:divisionName division of opinion Publishing unit
     * @req { headers['authorization'],  params.divisionName}
     */
    opinionPublishing: function(req, res, next)  {
        const divName = req.params.divisionName
        //check for token
        if(!req.headers['authorization']) {
            return res.status(401).json({
                error : 'No token, authorization denied',
                msg : 'You are not logged in correctly. Try loggin in again'
            })
        }

        const token = req.headers['authorization'].split(' ')[1];
        //verify admin or user with access to division
        try {
            const decoded = jwt.verify(token, jwsSecret)
            if (decoded.role === 'admin') {
                next()
            } else if (decoded.ou['opinionPublishing'].includes(divName)) {
                next()
            } else {
                res.status(400).json({
                    error: 'Authorization denied',
                    msg : 'You do not have access to this '+ divName +' division page. Access is limited to assigned users'
                })
            }
        } catch(err) {
            res.status(400).json({
                error : err,
                msg: 'Token Invalid. Try loggin in again'
            })
        }
    }

}

