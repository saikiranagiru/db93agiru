var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('oven', { title: 'Search Results Oven' });
});

module.exports = router;
