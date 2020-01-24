const express = require('express');
var db = require('../db');
const search = express.Router();

search.post("/findUser", function(req, res, next) {
    var name = req.body.name;
    var firstName = name.split(' ').slice(0, -1).join(' ');
    var lastName = name.split(' ').slice(-1).join(' ');
    console.log(req.params)
    db.query('SELECT * FROM "USER" WHERE firstname = $1 and lastname = $2', [firstName, lastName], (error, results) => {
        if(error) {
            console.log("Can't find this person");
            console.log(error.message || error);
            res.send("Can't find this person")
            res.end()
          } else {
            console.log(results.rows)
            res.send(results.rows)
            res.end()
          }
    })
})

search.post("/findMentor", function(req, res, next) {
    var name = req.body.name;
    var firstName = name.split(' ').slice(0, -1).join(' ');
    var lastName = name.split(' ').slice(-1).join(' ');
    var subject = '{"subject": "' + req.body.interest + '"}'
    subject = JSON.parse(subject) 
    console.log(subject)  
    db.query('SELECT "USER".firstname, "USER".lastname FROM "USER", "MENTOR" WHERE "USER".user_id = "MENTOR".user_id and "USER".firstname = $1 and "USER".lastname = $2 and "MENTOR".mentoring_subjects = $3', [firstName, lastName, subject], (error, results) => {
        if(error) {
            console.log("Can't find this mentor");
            console.log(error.message || error);
            res.send("Can't find this mentor")
            res.end()
          } else {
            console.log(results.rows)
            res.send(results.rows)
            res.end()
          }
    })
})

module.exports = search;