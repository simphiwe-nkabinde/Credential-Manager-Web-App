const {newsManagementModel} = require('../models/organisationalUnitModel');
const {v4: uuid} = require('uuid')


/**
 * @controller newsManagementControlller.js
 * @desc :: Server-side logic for managing hardware Review divsions.
 */
 module.exports = {

    /**
     * @controller newsManagementControlller.list()
     * @desc list all division names
     * @req {}
     */
     list: function (req, res) {
        newsManagementModel.find({}, 'divisionName', function (err, divs) {
            if (err) {
                return res.status(500).json({
                    msg: 'Error getting news management divisions',
                    error: err
                });
            }
            return res.json(divs);
        });
    },

    /**
     * @controller newsManagementControlller.listCredentials()
     * @desc list all credentials for a division
     * @req params.{ divisionName }
     */
    listCredentials: function(req,res) {
        const division = req.params.divisionName
        newsManagementModel.findOne({divisionName:division}, 'credentials', function(err, div) {
            if(err) {
                return res.status(500).json({
                    msg: 'Error getting division',
                    error: err
                });
            }
            if(!div) {
                return res.status(404).json({msg: 'Division not found'});
            }
            return res.json(div)
        })
    },

    /**
     * @controller newsManagementControlller.createCredential()
     * @desc create and add new credential to a specified division
     * @req body.{ divisionId, name , details, username, password }
     */
    createCredential: function(req, res) {
        const {division, name , details, username, password} = req.body;

        newsManagementModel.findOne({divisionName:division}, function(err, division) {
            if(err) {
                return res.status(500).json({
                    msg: 'error updating division',
                    error: err
                });
            }
            if(!division) {
                return res.status(404).json({
                    error: "error",
                    msg: 'division not found'
                })
            }
            division.credentials.push(
                {
                    id:uuid(),
                    name:name,
                    details:details,
                    username:username,
                    password:password
                }
            )
            division.markModified('credentials')    //doc.markModified() helpful when using Mixed types.
            division.save(function(err, division){
                if(err) {
                    return res.status(500).json({
                        error: err,
                        msg: 'Error getting division'
                    })
                }
                if(!division) {
                    return rest.staus(404).json({
                        error: "error",
                        msg:'division not found'
                    });
                }
                return res.json({msg: 'Added ' + name + ' credentials to this division' })
            })
        })
    },

    /**
     * @controller newsManagementControlller.updateCredential()
     * @desc update specific credentials of a specified division
     * @req body.{ divisionId, credentialId, name , details, username, password }
     */
    updateCredentials: function(req, res) {
        const {division, credentialId, name , username, password} = req.body;
        
        newsManagementModel.findOne({divisionName:division}, function(err, division) {
            if(err) {
                return res.status(500).json({
                    msg: 'error updating division',
                    error: err
                });
            }
            if(!division) {
                return res.status(404).json({
                    error: "error",
                    msg: 'division not found'
                })
            }

            const index = division.credentials.findIndex((obj) => obj.id === credentialId);
            division.credentials[index].username = username ? username : division.credentials[index].username;
            division.credentials[index].password = password ? password : division.credentials[index].password;

            division.markModified('credentials')
            division.save(function(err, user){
                if(err) {
                    return res.status(500).json({
                        error: err,
                        msg: 'Error getting division'
                    });
                }
                if(!division) {
                    return res.staus(404).json({
                        error: "error",
                        msg:'division not found'
                    });
                }
                return res.json({msg: name + ' credentials Updated'})
            })

        })

    }
 }