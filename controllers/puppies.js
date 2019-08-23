var Puppy = require('../models/Puppy');

module.exports = {
    index,
    new: newMatch,
    create,
};

function index(req, res){
    Puppy.find({}, function(err, puppies){
        res.render('puppies/index', {title: 'All Puppies', puppies});
    });
}

function newMatch(req, res) {
    res.render('puppies/new', { title: 'Add Match' });
  }

  function create(req, res) {
    var puppy = new Puppy(req.body);// for now, redirect righmoviest back to new.ejs
    puppy.save(function(err) {
      if (err) return res.redirect('/puppies/new');
      console.log(puppies);
      res.redirect('/puppies');
    });
  }