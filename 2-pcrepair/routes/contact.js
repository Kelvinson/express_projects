var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'Contact',
  });
});

// Send email
router.post('/send', function(req,res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Foxmail',
    auth: {
      user: 'kelvinson@foxmail.com',
      pass: 'password'
    }
  });

  var mailOptions = {
    from: '"Dong Wang ? " <kelvinson@foxmail.com>',
    to: 'support@techguywebsolutions.com',
    subject: 'Hello from PCRepair',
    text: 'You have a submission from.... Name:' + req.body.name + ' Email: ' + req.body.email + ' Message ' + req.body.message,
    html: '<p> You have a submission from... </p> <ul><li>Name: '+req.body.name+'</li><li> Email: ' + req.body.email + '</li><li> Message: ' + req.body.message + '</li></ul>'
  }

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      return console.log(error);
    }
    console.log('Message Sent: ' + info.response);
    res.redirect('/');
  })
});
//you have to export if you want to use this module in other files
module.exports = router;
