var express = require('express');
var router = express.Router();

/* GET about page. */
// since we  are using a router, we don't need to use router.get('/about')
router.get('/', function(req, res, next) { // no '/about' here because res.render('about') makes it does so.
  res.render('about', {
    title: 'About'
  });
});

//you have to export if you want to use this module in other files
module.exports = router;
