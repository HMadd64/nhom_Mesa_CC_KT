var express = require('express');
var router = express.Router();
router.use('/', require(__dirname + '/logincontroller'));
//router.use('/login_success', require(__dirname + '/successcontroller'));
module.exports = router;
