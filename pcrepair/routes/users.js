var express = require('express');
var router = express.Router();

/* GET users listing. */
// this is the route for "localhost:3000/users"
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', (req,res,next) => {
  res.send('this is a test')
});

module.exports = router;
