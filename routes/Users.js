const express = require('express');
const bcrypt = require('bcrypt');
const isEmpty = require("is-empty");
var loginValidate = require('../validation/login');
var registerValidate = require('../validation/register');
var db = require('../db');
const saltRounds = 10;
const router = express.Router();

router.post('/signIn', function(req, res, next) {  
  var email = req.body.email;
  var signInPassword = req.body.password;
  console.log(loginValidate(req.body))
  if(loginValidate(req.body)){
    db.query('SELECT * FROM "USER" WHERE email = $1', [email], (error, results) => {
      if (error) {
        throw error;
      }
      console.log("This is the database info grabbing users. You can see it comes after because it's asynchronous");
      if(isEmpty(results.rows)){
        console.log("No email like " + email);
      } else{
        var passwordDB= JSON.stringify(results.rows[0].password);
        bcrypt.compare(signInPassword, passwordDB, function(err, res) {
          if(res) {
            console.log("Successful login!");
          } else {
            console.log("Wrong Password");
          } 
        });} 
    })
  } else{
    console.log('Validation didn\'t pass');
    res.send(loginValidate(req.body).errors);
  }
});


router.post('/register', function(req, res, next) {
    var password = req.body.password;
    var fullname = req.body.name.replace(/\s+/g, '')
    var firstname = fullname.split(' ').slice(0, -1).join(' ');
    var lastname = fullname.split(' ').slice(-1).join(' ');
    if(registerValidate(req.body)){
      bcrypt.hash(password, saltRounds, function(err, hash) {
        db.query('IF NOT EXISTS(SELECT email FROM "USER" WHERE email = $1) INSERT INTO "USER"(firstname, lastname, email, password) VALUES ($2, $3, $4, $5)', [req.body.email, firstname, lastname, req.body.email, hash], (error, results) => {
          if (error) {
            console.log("Something went wrong with the db");
            console.log(results);
            throw error;
          }
          console.log("Added the user " + firstname + " " + lastname + "!")
          console.log(results);
        });
      });
    } else{
      console.log('validation didn\'t pass');
      res.send(loginValidate(req.body).errors);
    }
});

module.exports = router;