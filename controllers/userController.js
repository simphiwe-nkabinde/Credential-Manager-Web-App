const userModel = require('../models/userModel');

/**
 * userController.js
 * 
 * @desc :: Server-side logic for managing users.
 */
module.exports = {

    /**
     * @controller userController.list()
     * @desc list all users
     * @req {}
     */
    list: function (req, res) {
        userModel.find({}, '-password', function (err, users) {
            if (err) {
                return res.status(500).json({
                    msg: 'Error when getting users',
                    error: err
                });
            }
            return res.json(users);
        });
    },

    /**
     * @controller userController.updateRole()
     * @desc update users Role (admin, management or user)
     * @req admin only
     */
    updateRole: function (req, res) {
        const id = req.params.id;
        const newRole = req.params.role;

        userModel.findByIdAndUpdate(id, {role: newRole}, function(err, user) {
            if(err) {
                return res.status(500).json({
                    msg: 'Error updating user role',
                    error: err
                });
            } else {
                return res.json({msg: 'Updated User role: '+ user.name})
            }
        })
    },

    /**
     * @controller userController.updateOU()
     * @desc update divisions in selected (OU)organisational unit 
     * @req admin only
     */
    updateOU: function(req, res) {
        const id = req.params.id;
        const orgUnit = req.body.orgUnit;
        const divisions = req.body.divisions;

        userModel.findOne({_id: id}, function(err, user) {
            if(err) {
                return res.status(500).json({
                    msg: 'Error updating user',
                    error: err
                });
            }
            if(!user) {
                return res.status(404).json({msg: 'User not found'});
            }

            user.organisationalUnit[orgUnit] = divisions;

            user.save(function(err, user){
                if(err) {
                    return res.status(500).json({msg: 'Error getting user'})
                }
                if(!user) {
                    return rest.staus(404).json({msg:'User not found'});
                }
                return res.json({msg: 'Updated user ' + user.name + ": " + user.organisationalUnit[orgUnit]})
            })
        })
    },

    /**
     * @controller userController.create()
     * @desc create new user
     * @req body.{ name, email, password }
     */
    create: function(req, res) {
        const {name, email, password} = req.body;
        //simple validation
        if(!name || !email || !password) {
            return res.status(400).json({msg: 'Please enter all fields'})
        }
        //check for existing user
        userModel.findOne({email: email}, function(err, user) {
            if(user) return res.status(400).json({msg:'User already exists'})
        })

        const user = new userModel({
            name: name,
            email: email,
            password: password
        });

        user.save(function(err, user) {
            if(err) {
                return res.status(500).json({
                    msg: 'Error saving user',
                    error: err
                });
            }
            return res.json({
                msg: 'New user saved'
            });
        });
    }

}