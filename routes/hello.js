var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({'message': 'Hello API.'});
});

module.exports = router;
