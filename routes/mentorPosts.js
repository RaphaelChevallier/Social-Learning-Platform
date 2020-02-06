const express = require('express');
var db = require('../db');
const mentorPosts = express.Router();

mentorPosts.post('/createPost', function(req, res, next) { 
      db.query('INSERT INTO MENTOR_POSTS (mentor_id, title, post_description, type_of_content, link, dateOfPost) VALUES ($1, $2, $3, $4, $5, $6);', [req.body.isMentor, req.body.title, req.body.description, req.body.typeOfContent, req.body.link, req.body.date], (error, results) => {
        if (error) {
            console.log(error)
        }else{

         }
      })
  });

module.exports = mentorPosts;