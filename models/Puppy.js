var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var puppySchema = new Schema({
    name: {
        type: String,
    },
    breed: {
        type: String,
        default: 'Mixed'
    },
    age: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Puppy', puppySchema);