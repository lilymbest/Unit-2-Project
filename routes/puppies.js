var express = require('express');
var router = express.Router();
var puppyCtrl = require('../controllers/puppies');

/* GET users listing. */
router.get('/', puppyCtrl.index);

module.exports = router;
