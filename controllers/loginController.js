const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken')
const jwtSecret = 'jwt-cred-man-app';

/**
 * @controller authController.js
 * @desc :: authenticates users logging in and provides jwt.
 */
 module.exports = {

    /**
     * @controller authController.loginAuth()
     * @desc authenticate user login send jwt
     * @req body.{email, password}
     */
    loginAuth: function(req, res) {
        const {email, password} = req.body;
        //simple validation
        if(!email || !password) {
            return res.status(400).json({error: 'Please enter all fields'})
        }
        //check for existing user
        userModel.findOne({email: email}, function(err, user) {
            if(!user) return res.status(400).json({error:'User does not exists'})
            //validate password
            if(user.password !== password) return res.status(400).json({error: 'email and password do not match'});

            //create & send JWT
            const payLoad = {
                user : user._id,
                role: user.role,
                ou: user.organisationalUnit
            }
            const token = jwt.sign(payLoad, jwtSecret);
            res.send({
                token: token,
                user: user.name,
                email: user.email,
                role: user.role,
                uo: user.organisationalUnit
            })
        })
    }
 }