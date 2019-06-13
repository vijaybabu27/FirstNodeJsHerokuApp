var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Express', msg: 'My First Application Deployed in Heroku' });
});

module.exports = router;
