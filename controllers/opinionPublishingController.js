const {opinionPublishingModel} = require('../models/organisationalUnitModel');

/**
 * @controller opinionPublishingControlller.js
 * @desc :: Server-side logic for managing hardware Review divsions.
 */
 module.exports = {

    /**
     * @controller opinionPublishingControlller.list()
     * @desc list all divisions
     * @req {}
     */
     list: function (req, res) {
        opinionPublishingModel.find({}, 'divisionName', function (err, divs) {
            if (err) {
                return res.status(500).json({
                    msg: 'Error getting opinion publishing divisions',
                    error: err
                });
            }
            return res.json(divs);
        });
    },

    /**
     * @controller opinionPublishingControlller.listCredentials
     * @desc list all credentials for a division
     * @req params.{ divisionName }
     */
    listCredentials: function(req,res) {
        const division = req.params.divisionName
        opinionPublishingModel.findOne({divisionName:division}, 'credentials', function(err, div) {
            if(err) {
                return res.status(500).json({
                    msg: 'Error getting division',
                    error: err
                });
            }
            if(!user) {
                return res.status(404).json({msg: 'Division not found'});
            }
            return res.json(div)
        })
    },

        /**
     * @controller opinionPublishingControlller.createCredential()
     * @desc create and add new credential to a specified division
     * @req body.{ divisionId, name , details, username, password}
     */
    createCredential: function(req, res) {
        const { divisionId, name , details, username, password} = req.body;
        
        opinionPublishingModel.findOne({_id:divisionId}, function(err, division) {
            if(err) {
                return res.status(500).json({
                    msg: 'error updating division',
                    error: err
                });
            }
            if(!division) {
                return res.status(404).json({msg: 'division not found'})
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

            division.save(function(err, division){
                if(err) {
                    return res.status(500).json({msg: 'Error getting division'})
                }
                if(!division) {
                    return rest.staus(404).json({msg:'division not found'});
                }
                return res.json({msg: 'added ' + name + ' credentials to ' + division.divisionName + ' division' })
            })

        })

    },

    /**
     * @controller opinionPublishingControlller.updateCredential()
     * @desc update specific credentials of a specified division
     * @req body.{divisionId, credentialId, name , details, username, password
     */
    updateCredentials: function(req, res) {
        const {divisionId, credentialId, name , details, username, password} = req.body;
        
        opinionPublishingModel.findOne({_id:divisionId}, function(err, division) {
            if(err) {
                return res.status(500).json({
                    msg: 'error updating division',
                    error: err
                });
            }
            if(!division) {
                return res.status(404).json({msg: 'division not found'})
            }

            const index = division.credentials.findIndex((obj) => obj.id === credentialId);
            division.credentials[index].name = name ? name :  division.credentials[index].name;
            division.credentials[index].details = details ? details :  division.credentials[index].details;
            division.credentials[index].username = username ? username : division.credentials[index].username;
            division.credentials[index].password = password ? password : division.credentials[index].password;

            division.save(function(err, user){
                if(err) {
                    return res.status(500).json({msg: 'Error getting division'})
                }
                if(!user) {
                    return rest.staus(404).json({msg:'division not found'});
                }
                return res.json({msg: 'Update ' + name + ' credentials of division'})
            })

        })

    }
    
 }