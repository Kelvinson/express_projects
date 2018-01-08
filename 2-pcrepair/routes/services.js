var express = require('express');
var router = express.Router();
var fs = require('fs'); // don't require npm install because it is a node core module.

var results;
fs.readFile('json/services.json','utf8', function(err,data) {
  if (err) {
    throw err;
  } else {
    results = JSON.parse(data);
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('services', {
    title: 'Services',
    services: results
  });
});

//you have to export if you want to use this module in other files
module.exports = router;
