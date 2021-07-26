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

exports.newsManagementModel = mongoose.model('newsManagement', organisationalUnitSchema, 'newsManagement');
exports.softwareReviewModel = mongoose.model('softwareReview', organisationalUnitSchema, 'softwareReviews');
exports.hardwareReviewModel = mongoose.model('hardwareReview', organisationalUnitSchema, 'hardwareReviews');
exports.opinionPublishingModel = mongoose.model('opinionPublishing', organisationalUnitSchema, 'opinionPublishing');
