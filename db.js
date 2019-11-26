const env = process.env.USE_HEROKU_DB;
const env_user = process.env.USER || process.env.USERNAME || "root";
const { Client } = require('pg');
var db;

function connectDatabase() {
    if (!db) {
        if(process.env.USE_HEROKU_DB == 'heroku'){
            const database = new Client({
              connectionString: process.env.DATABASE_URL,
              ssl: true,
            });
            database.connect(function(err){
                if(!err) {
                    console.log('Heroku Database is connected!');
                } else {
                    console.log('Error connecting database!');
                    console.log(err);
                }
            });
            db = database
            return database
          } else{
            const connectionString = `postgres://${env_user}:postgres@localhost:5432/capstone`;
            const database = new Client({
              connectionString: connectionString
            });
            database.connect(function(err){
                if(!err) {
                    console.log('Local Database is connected!');
                } else {
                    console.log('Error connecting database!');
                    console.log(err);
                }
            });
            db = database
            return database
          }
    }
}

module.exports = connectDatabase();