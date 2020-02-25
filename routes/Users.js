const express = require("express");
const bcrypt = require("bcryptjs");
const isEmpty = require("is-empty");
//const User = require('sequelize');//sequelize user for nodemailer
var loginValidate = require("../validation/login");
var registerValidate = require("../validation/register");
var db = require("../db");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const users = express.Router();

// The dependencies and code for the nodemailer email send
const crypto = require("crypto");

require("dotenv").config();
const nodemailer = require("nodemailer");
const BCRYPT_SALT_ROUNDS = 12;

users.post("/forgot", function(req, res) {
  var email = req.body.email;


  if (email == "") {
    res.status(400).send("email required");
  } else {
    // var passwordDB= results.rows[0].array_to_json[0].password;
    // var mentorCheck= false;
    // var signinArray = [];
    //now that we have confirmed a user with this email exists:

    //const token = crypto.randomBytes(20).toString('hex');

    db.query(
      'SELECT user_id FROM "USER" WHERE email = $1 ',
      [email],
      (error, results) => {
        if (error) {
          console.log(error)
        } else {
          
          var userID = results.rows[0].user_id; //stores user id
          const token = crypto.randomBytes(20).toString("hex");

          var resetExpiry = Date.now() + 3600000; // create the integer that will determine the timeout for resetting
          db.query(
            'UPDATE "USER" SET RESETTOKEN = $1, RESETEXPIRE = $2 WHERE user_id = $3',
            [token, resetExpiry, userID],
            (error, results) => {
              if (error) {
               console.log(error);
              } else { 
                console.log("sending mail");
                const transporter = nodemailer.createTransport({
                  //create the transporter from nodemailer
                  service: "SendGrid",
                  auth: {
                    user: process.env.EMAIL_ADDRESS,
                    pass: process.env.EMAIL_PASSWORD
                  }
                });
                const mailOptions = {
                  from: "giddyup.reset@giddy.com",
                  to: req.body.email,
                  subject: "Link To Reset Password",
                  text:
                    "You are receiving this because you (or someone) have requested to reset the password for this account.\n\n" +
                    "Please click on the following link, or paste said link into your browser to complete the process within one hour of receiving it: \n\n" +
                    "http://localhost:3000/ResetPassword/"+token+"\n\n" +
                    "If you did not request this, please ignore the email and your passworld will remain unchanged.\n"
                };
              
                transporter.sendMail(mailOptions, (err, response) => {
                  if (err) {
                    console.error("there was an error: ", err);
                  } else {
                    console.log("here is the res: ", response);
                    res.status(200).json("recovery email sent");
                  }
                });
                res.end();
              }
            }
          );
        }
      }
    );
  }
});

//end of nodemailer code

// The code for the reset page backend
users.get("/reset", function(req, res) {
  //the goal here is to parse the token part of the url from the email and 
  //find the user with that token in the database.
  console.log("reset started: grabbing query tokens");
  console.log(req.query);
  tokenTest = req.query.resetPasswordToken;
  console.log("here's the token taken from the link: " + tokenTest);
  // expiryTest = req.query.resetExpiry;
  db.query(
    'SELECT USER_ID, RESETTOKEN, RESETEXPIRE FROM "USER" WHERE RESETTOKEN = $1',
    [tokenTest],
    (error, results) => {
      if (error) {
        throw results;
      } else {
        console.log("query complete");
        console.log("checking");
        console.log("row count" + results.rows.length);
        resettoken = results.rows[0].resettoken;
        console.log(resettoken);
        resetExpire = results.rows[0].resetexpire;
        user_id=results.rows[0].user_id;
        console.log(resetExpire);

        console.log(user_id)

        if (resetExpire <= Date.now()) {//if the expire time is less than the current date time
          console.log("password reset link has expired, or is invalid");
          res.json("password reset link is invalid or has expired");
        } else {
          console.log("good to go, sending message to front end")
         console.log("sending userid which is" + user_id)
          res.status(200).send({ message: "OKAY",
          username: user_id
           });
        }
      }
    }
  );
});
//backend for actual update
users.put("/updatePasswordViaEmail", function(req, res) {
var username = req.body.username;
var password = JSON.stringify(req.body.password);
  console.log(username);
  db.query(
    'SELECT firstname FROM "USER" WHERE user_id = $1',
    [username],
    (error, results) => {
      if (error) {
        throw error;
      } else {
    
        if (results.rows[0] != null) {
          console.log("user exists in db");
          console.log("new password: " + password);
          bcrypt.hash(password, saltRounds, function(err, hash) {
            db.query(
                'UPDATE "USER" SET PASSWORD = $1 WHERE USER_ID = $2',
                [hash, username],
                (error, results) => {
                  if (error) {
                    console.log("no user exists in db to update");
                    res.status(404).json("no user exists in db to update");
                  } else {
                    console.log("password updated");
                    res.status(200).send({ message: "password updated" });
                  }
                }
              );
            });
        }
      }
    }
  );
});
users.post("/signIn", function(req, res, next) {
  var email = req.body.email;
  var signInPassword = JSON.stringify(req.body.password);
  console.log(loginValidate(req.body));
  if (loginValidate(req.body).isValid == true) {
    db.query(
      'select array_to_json(array_agg(row_to_json(t)))from (SELECT * FROM "USER" WHERE email = $1) t',
      [email],
      (error, results) => {
        if (error) {
          throw error;
        }
        if (results.rows[0].array_to_json === null) {
          res.end("No email like " + email);
        } else {
          console.log(results.rows[0].array_to_json === null);
          var passwordDB = results.rows[0].array_to_json[0].password;
          var mentorCheck = false;
          var signinArray = [];
          bcrypt.compare(signInPassword, passwordDB, function(err, result) {
            if (result == true) {
              let token = jwt.sign(
                results.rows[0].array_to_json[0],
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
              );
              signinArray.push(token);
              if (results.rows[0].array_to_json[0].mentor_id != null) {
                mentorCheck = true;
                signinArray.push(mentorCheck);
                res.send(signinArray);
              } else {
                res.send(signinArray);
              }
            } else {
              res.end("Wrong Password");
            }
          });
        }
      }
    );
  } else {
    console.log("Validation didn't pass");
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
              res.send("Duplicate entries of email");
              res.end();
            } else {
              canRegister = true;
              res.send(canRegister);
              res.end();
            }
          });
        });
      }else{
        bcrypt.hash(password, saltRounds, function(err, hash) {
          db.query('INSERT INTO "USER"(firstname, lastname, email, password, city, bdate, summary, interests , mentor_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, nextval(\'serial_mentor_id\'))', [req.body.firstName, req.body.lastName, req.body.email, hash, req.body.city, req.body.birthdate, req.body.summary, req.body.interests], (error, results) => {
            if(error) {
              console.log("Something went wrong with the db");
              console.log(error.message || error);
              res.send("Duplicate entries of email");
              res.end();
            }
          }
        );
        db.query(
          "INSERT INTO \"MENTOR\"(level_of_experience_primary_mentoring_subject, mentoring_subjects, certified, wage, user_id, mentor_id) VALUES ($1, $2, $3, $4, currval(pg_get_serial_sequence('\"USER\"', 'user_id')), currval('serial_mentor_id'))",
          [req.body.yearsExp, subject, true, 40000],
          (error, results) => {
            if (error) {
              console.log("Something went wrong with the mentor db");
              console.log(error.message || error);
              res.end();
            } else {
              canRegister = true;
              res.send(canRegister);
              res.end();
            }
          }
        );
      });
    }
  } else {
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
            res.send("Please enter a brief summary")
            res.end()
          } 
        });
            db.query('select array_to_json(array_agg(row_to_json(t)))from (SELECT * FROM "USER" WHERE email = $1) t', [req.body.email], (error, results) => {
              if (error) {
                throw error;
              }
              if(results.rows[0].array_to_json === null){
                res.end("No email like " + req.body.email);
              } else{
                var mentorCheck= false;
                var signinArray = [];  
                    let token = jwt.sign(results.rows[0].array_to_json[0], process.env.JWT_SECRET, {expiresIn: "1d"})
                    signinArray.push(token)
                    if (results.rows[0].array_to_json[0].mentor_id != null){
                      mentorCheck = true;
                      signinArray.push(mentorCheck)
                      res.send(signinArray);
                    }else{
                      res.send(signinArray) 
                    }           
                }
            })
      });
module.exports = users;
