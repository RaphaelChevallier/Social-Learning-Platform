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
      if(results.rows[0].array_to_json === null){
        res.end("No email like " + email);
      } else{
        console.log(results.rows[0].array_to_json === null)
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
    var isMentor = JSON.stringify(req.body.isMentor);
    var subject = {subject: req.body.mentorSubject};
    var canRegister = false;
    if(registerValidate(req.body).isValid == true){
      if(isMentor == "false"){
        bcrypt.hash(password, saltRounds, function(err, hash) {
          db.query('INSERT INTO "USER"(firstname, lastname, email, password, city, bdate, summary, interests) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [req.body.firstName, req.body.lastName, req.body.email, hash, req.body.city, req.body.birthdate, req.body.summary, req.body.interests], (error, results) => {
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
      }else{
        bcrypt.hash(password, saltRounds, function(err, hash) {
          db.query('INSERT INTO "USER"(firstname, lastname, email, password, city, bdate, summary, interests , mentor_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, nextval(\'serial_mentor_id\'))', [req.body.firstName, req.body.lastName, req.body.email, hash, req.body.city, req.body.birthdate, req.body.summary, req.body.interests], (error, results) => {
            if(error) {
              console.log("Something went wrong with the db");
              console.log(error.message || error);
              res.send("Duplicate entries of email")
              res.end();
            }
          });
          db.query('INSERT INTO "MENTOR"(level_of_experience_primary_mentoring_subject, mentoring_subjects, certified, wage, user_id, mentor_id) VALUES ($1, $2, $3, $4, currval(pg_get_serial_sequence(\'"USER"\', \'user_id\')), currval(\'serial_mentor_id\'))', [req.body.yearsExp, subject, true, 40000], (error, results) => {
            if(error) {
              console.log("Something went wrong with the mentor db");
              console.log(error.message || error);
              res.end()
            } else {
              canRegister = true;  
              res.send(canRegister) 
              res.end();
            }
          });
        });
      }
    }else{
      res.json(registerValidate(req.body).errors);
      res.end();
    }
});

users.post('/edit', function(req, res, next) { 
  db.query('UPDATE \"USER\" SET firstname=$1, lastname=$2, email=$3, city=$4, bdate=$5, summary=$6, interests=$7, gender=$8, country=$9, province=$10 WHERE user_id=$11' ,
         [req.body.firstName, req.body.lastName, req.body.email, req.body.city, req.body.birthdate, req.body.summary, req.body.interests, req.body.gender, req.body.country, req.body.province,req.body.user_id], (error, results) => {
          if(error) {
            console.log("Something went wrong with the db");
            console.log(error.message || error);
            res.send("Duplicate entries of email")
            res.end()
          } else {
            res.send()
            res.end()
          }
        });
      });
module.exports = users;