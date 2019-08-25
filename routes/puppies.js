var express = require('express');
var router = express.Router();
var puppyCtrl = require('../controllers/puppies');

/* GET users listing. */
router.get('/', puppyCtrl.index);
router.get('/new', puppyCtrl.new);
router.post('/', puppyCtrl.create);
router.get('/:id', puppyCtrl.show);

module.exports = router;
