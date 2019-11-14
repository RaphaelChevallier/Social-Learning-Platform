const express = require('express');
const bcrypt = require('bcryptjs');
const isEmpty = require("is-empty");
var loginValidate = require('../validation/login');
var registerValidate = require('../validation/register');
var db = require('../db');
const saltRounds = 10;
const router = express.Router();

router.post('/signIn', function(req, res, next) {  
  var email = req.body.email;
  var signInPassword = JSON.stringify(req.body.password);
  console.log(loginValidate(req.body))
  if(loginValidate(req.body)){
    db.query('SELECT * FROM "USER" WHERE email = $1', [email], (error, results) => {
      if (error) {
        throw error;
      }
      if(isEmpty(results.rows)){
        res.end("No email like " + email);
      } else{
        var passwordDB= results.rows[0].password;
        var mentorCheck= false;
        var isLoggedin=false;
        bcrypt.compare(signInPassword, passwordDB, function(err, result) {
          if(result) {
            isLoggedin=true;
            var signInArray = [isLoggedin];
            if (results.rows[0].mentor_id != null){
              mentorCheck = true;
              signInArray.push(mentorCheck);
              res.end(signInArray);
            }            
          } else {
            res.end("Wrong Password");
          } 
        });} 
    })
  } else{
    console.log('Validation didn\'t pass');
    res.send(loginValidate(req.body).errors);
  }
});


router.post('/register', function(req, res, next) {
    var password = JSON.stringify(req.body.password);
    var firstname = req.body.name.split(' ').slice(0, -1).join(' ');
    var lastname = req.body.name.split(' ').slice(-1).join(' ');
    var canRegister = false;
    if(registerValidate(req.body).isValid == true && req.body.hasAgreed == true){
      bcrypt.hash(password, saltRounds, function(err, hash) {
        db.query('INSERT INTO "USER"(firstname, lastname, email, password, city, bdate, summary, interests) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ', [firstname, lastname, req.body.email, hash, req.body.city, req.body.birthdate, req.body.summary, req.body.interests], (error, results) => {
          if(error) {
            console.log("Something went wrong with the db");
            console.log(error.message || error);
            res.send("Duplicate entries of email")
            res.end()
          } else {
            canRegister = true;
            console.log("Added the user " + firstname + " " + lastname + "!")
            res.send(canRegister)
            res.end()
          }
        });
      });
    } else{
      res.json(registerValidate(req.body).errors);
      res.end();
    }
});

module.exports = router;