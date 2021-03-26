var express = require('express');
var router = express.Router();
const user = require('./user')
/* GET Health home page. */
router.get('/health', function(req, res, next) {
  res.render('index', { title: 'Health' });
});
router.use('/',user);
module.exports = router;
