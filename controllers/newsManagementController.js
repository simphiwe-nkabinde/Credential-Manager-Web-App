const orgUnitModel = require('../models/organisationalUnitModel');
const newsManagementModel = orgUnitModel.newsManagementModel
const uuid = require('uuid')


/**
 * newsManagementControlller.js
 * 
 * @desc :: Server-side logic for managing hardware Review divsions.
 */
 module.exports = {

    /**
     * @controller newsManagementControlller.list()
     * @desc list all division names
     * @access public
     */
     list: function (req, res) {
        newsManagementModel.find( 'divisionName', function (err, divs) {
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
     * @access public
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
            if(!user) {
                return res.status(404).json({msg: 'Division not found'});
            }
            return res.json(div)
        })
    },

    /**
     * @controller newsManagementControlller.createCredential()
     * @desc create and add new credential to a specified division
     * @access public
     */
    createCredential: function(req, res) {
        const {divisionId, name , details, username, password} = req.body;
        
        newsManagementModel.findOne({_id:divisionId}, function(err, division) {
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

            division.save(function(err, user){
                if(err) {
                    return res.status(500).json({msg: 'Error getting division'})
                }
                if(!user) {
                    return rest.staus(404).json({msg:'division not found'});
                }
                return res.json({msg: 'added ' + name + ' credentials to division' })
            })

        })

    },

    /**
     * @controller newsManagementControlller.updateCredential()
     * @desc update specific credentials of a specified division
     * @access private admin & management role
     */
    updateCredentials: function(req, res) {
        const {divisionId, credentialId, name , details, username, password} = req.body;
        
        newsManagementModel.findOne({_id:divisionId}, function(err, division) {
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