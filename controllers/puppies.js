var Puppy = require('../models/Puppy');

module.exports = {
    index,
};

function index(req, res){
    Puppy.find({}, function(err, puppies){
        res.render('puppies/index', {title: 'All Puppies', puppies});
    });
}