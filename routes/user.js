var express = require('express');
var router = express.Router();
const user = require('../controller/user')
/* GET users listing. */
router.post('/login', user.Login);
router.post('/register', user.Register);
router.post('/incomingnotification',user.IncomeNotification)
module.exports = router;
