var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('User', new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    admin: {type: Boolean, required: false, default: false}
}));
