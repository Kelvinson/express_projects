var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home',
    name: 'Dong Wang'
  });
});

//you have to export if you want to use this module in other files
module.exports = router;
