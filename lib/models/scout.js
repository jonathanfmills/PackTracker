var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var scoutSchema = new Schema({
    name: {type:String},
    email: {type:String},
    phone: {type:String},
    dateOfBirth: {type:String},
    awards: [{ name: String }]
});

module.exports = mongoose.model('Scout', scoutSchema);