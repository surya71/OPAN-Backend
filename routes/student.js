var express = require('express');
var router = express.Router();
const student = require('../controller/student')
/* GET users listing. */
router.get('/login', student.Login);

module.exports = router;
