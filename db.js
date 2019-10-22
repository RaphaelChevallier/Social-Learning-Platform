const env = process.env.NODE_ENV;
const env_user = process.env.USER || "root";
var db;
const { Client } = require('pg');

function connectDatabase() {
    if (!db) {
        if(env == "heroku"){
            db = new Client({
              connectionString: process.env.DATABASE_URL,
              ssl: true,
            });
            db.connect(function(err){
                if(!err) {
                    console.log('Heroku Database is connected!');
                } else {
                    console.log('Error connecting database!');
                    console.log(err);
                }
            });
          } else{
            const connectionString = `postgres://${env_user}:postgres@localhost:5432/capstone`;
            db = new Client({
              connectionString: connectionString
            });
            db.connect(function(err){
                if(!err) {
                    console.log('Local Database is connected!');
                } else {
                    console.log('Error connecting database!');
                    console.log(err);
                }
            });
          }
    }
    return db;
}

module.exports = connectDatabase();