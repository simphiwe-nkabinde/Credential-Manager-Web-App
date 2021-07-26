const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    registerDate: {
        type:Date,
        default:Date.now
    },
    role: {
        type: String,
        default: 'user'
    },
    organisationalUnit : {
        newsManagement: [],
        softwareReviews: [],
        hardwareReviews: [],
        opinionPublishing: []
    }
});

module.exports = mongoose.model('user', userSchema, 'users');