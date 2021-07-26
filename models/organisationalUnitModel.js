const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//same schema for {newsManagementModel, softwareReviewsModel, hardwareReviewsModel, opinionPublishing}
const organisationalUnitSchema = new Schema({
    divisionName : {
        type: String,
        required: true
    },
    credentials : {}
});

module.exports = {
    newsManagementModel: mongoose.model('newsManagement', organisationalUnitSchema, 'newsManagement'),
    softwareReviewModel: mongoose.model('softwareReview', organisationalUnitSchema, 'softwareReviews'),
    hardwareReviewModel: mongoose.model('hardwareReview', organisationalUnitSchema, 'hardwareReviews'),
    opinionPublishingModel: mongoose.model('opinionPublishing', organisationalUnitSchema, 'opinionPublishing')
}