var express = require('express');
var router = express.Router();
var matchesCtrl = require('../controllers/api/matches');

router.get('/matches', matchesCtrl.index);

module.exports =router;