var express = require('express');
var router = express.Router();
router.use('/', function (req, res) {
  res.render('login.ejs');
});
router.use('/success', function (req, res) {
  res.render('login_success.ejs');
});
module.exports = router;
