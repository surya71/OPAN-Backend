var express = require('express');
var router = express.Router();

/* GET Health home page. */
router.get('/health', function(req, res, next) {
  res.render('index', { title: 'Health' });
});

module.exports = router;
