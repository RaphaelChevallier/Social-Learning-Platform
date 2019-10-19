const express = require('express');
const bcrypt = require('bcrypt');
var loginValidate = require('../validation/login');
var registerValidate = require('../validation/register');
var db = require('../db');
const router = express.Router();

router.post('/signIn', function(req, res, next) {  
  var email = req.body.email;
  console.log(loginValidate(req.body))
  if(loginValidate(req.body)){
    db.query('SELECT * FROM "USER"', (error, results) => {
      if (error) {
        throw error
      }
      console.log("This is the database info grabbing users. You can see it comes after because it's asynchronous");
      console.log(results.rows);
      bcrypt.compare(results.rows.password, hash, function(err, res) {
        if(res) {
          res.send("Successful login!");
        } else {
         res.send("Wrong Password");
        } 
      });
    })
  } else{
    console.log('validation didn\'t pass');
    res.send(loginValidate(req.body).errors);
  }
    console.log("This is the info from the frontend");
    console.log(req.body);
});

router.post('/register', function(req, res, next) {
    var password = req.body.password;
    if(registerValidate(req.body)){
      bcrypt.hash(password, 10, function(err, hash) {
        // Store hash in database
      });
      res.send('API for login is working properly');
      console.log(req.body);
    } else{
      console.log('validation didn\'t pass');
      res.send(loginValidate(req.body).errors);
    }
});

module.exports = router;