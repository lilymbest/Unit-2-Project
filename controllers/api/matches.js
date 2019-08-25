const Match = require('../../models/Match');

module.exports = {
    index,
}

function index(req, res, next){
    Match.find({})
    .then(function(matches){
        req.status(200).json(matches);
    })
    .catch(function(err){
        req.status(500).json(err);
    });
}