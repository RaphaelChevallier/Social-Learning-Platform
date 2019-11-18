const express = require('express');
const bcrypt = require('bcryptjs');
const isEmpty = require("is-empty");
var loginValidate = require('../validation/login');
var registerValidate = require('../validation/register');
var db = require('../db');
const saltRounds = 10;
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../config');
const users = express.Router();

users.post('/signIn', function(req, res, next) {  
  var email = req.body.email;
  var signInPassword = JSON.stringify(req.body.password);
  console.log(loginValidate(req.body))
  if(loginValidate(req.body).isValid ==true){
    db.query('select array_to_json(array_agg(row_to_json(t)))from (SELECT * FROM "USER" WHERE email = $1) t', [email], (error, results) => {
      if (error) {
        throw error;
      }
      if(isEmpty(results)){
        res.status(400).json({error: 'User does not exist'})
        res.end("No email like " + email);
      } else{
        var passwordDB= results.rows[0].array_to_json[0].password;
        var mentorCheck= false;
        var signinArray = [];
        bcrypt.compare(signInPassword, passwordDB, function(err, result) {
          if(result == true) {
            let token = jwt.sign(results.rows[0].array_to_json[0], process.env.JWT_SECRET, {expiresIn: "1d"})
            signinArray.push(token)
            if (results.rows[0].array_to_json[0].mentor_id != null){
              mentorCheck = true;
              signinArray.push(mentorCheck)
              res.send(signinArray);
            }else{
              res.send(signinArray) 
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


users.post('/register', function(req, res, next) {
    var password = JSON.stringify(req.body.password);
    var canRegister = false;
    if(registerValidate(req.body).isValid == true){
      bcrypt.hash(password, saltRounds, function(err, hash) {
        db.query('INSERT INTO "USER"(firstname, lastname, email, password, city, bdate, summary, interests) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ', [req.body.firstName, req.body.lastName, req.body.email, hash, req.body.city, req.body.birthdate, req.body.summary, req.body.interests], (error, results) => {
          if(error) {
            console.log("Something went wrong with the db");
            console.log(error.message || error);
            res.send("Duplicate entries of email")
            res.end()
          } else {
            canRegister = true;
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

module.exports = users;