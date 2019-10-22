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


const port = process.env.PORT || 5432;
app.listen(port);