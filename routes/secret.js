const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auththenticate');

// use authentication all routes after this must be authenticated
router.use(authenticate);

/* GET secret. */
router.get('/', function(req, res, next) {

  


  res.render('secret');
});



module.exports = router;
