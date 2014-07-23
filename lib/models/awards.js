var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var awardsSchema = new Schema({
    name: {type:String},
    description: {type:String}
});

module.exports = mongoose.model('Awards', awardsSchema);