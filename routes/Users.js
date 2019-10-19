const express = require('express');
const bcrypt = require('bcrypt');
var db = require('../db');
const router = express.Router();

router.post('/signIn', function(req, res, next) {  
  db.query('SELECT * FROM USER', (error, results) => {
    if (error) {
      throw error
    }
    console.log("no users");
  })
    console.log(req.body);
});

router.post('/logIn', function(req, res, next) {
    res.send('API for login is working properly');
    console.log(req.body);
});

module.exports = router;