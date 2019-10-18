const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV;
const env_user = process.env.USER;

router.post('/signIn', function(req, res, next) {
    res.send('API is working properly');
    console.log(req.body);
});

router.post('/logIn', function(req, res, next) {
    res.send('API is working properly');
    console.log(req.body);
});

const { Client } = require('pg');

if(env == "heroku"){
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.end() //just closing connection
} else{
  const { Client } = require('pg');
  const connectionString = `postgres://${env_user}:postgres@localhost:5432/capstone`;
  const client = new Client({
    connectionString: connectionString
  });
  client.connect()
  .catch(e => console.log)
  .finally(() => client.end())
}

module.exports = router;