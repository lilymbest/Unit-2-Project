var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var puppySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        default: 'Mixed',
        required: true,
    },
    age: {
        type: Number,
        default: 0
    },
    energy: {
        enum: ['Low Energy', 'High Energy', 'Medium']
    }
});

var matchShema = new mongoose.Schema({
        message: [
            "https://dog.ceo/api/breeds/image/random/3"
        ],
});


module.exports = mongoose.model('Puppy', puppySchema);