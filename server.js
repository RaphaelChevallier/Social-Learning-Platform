const env = process.env.NODE_ENV;
const env_user = process.env.USER;
const express = require('express');
var cors = require('cors');
const path = require('path');
var bodyParser = require('body-parser')

var Users = require('./routes/Users')

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use("/Users", Users);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//app.use('/users', Users)


const { Client } = require('pg');

if(env == "heroku"){
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  console.log("Heroku db connected") 
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



const port = process.env.PORT || 5000;
app.listen(port);