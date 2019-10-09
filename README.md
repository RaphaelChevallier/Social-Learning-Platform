# Social-Learning-Platform
Capstone Project Social Learning Platform Webapp

# Start Capstone Local Development
1. First please clone this repo to your local machine.
2. First we must download Node and React to your machines. I am specifically using the NPM package manager so please use that to follow with the development. Of course it's a bit different for both mac and windows so depending on your machine follow the instructions. I used homebrew to download NPM but that's not available for windows. Once the NPM is downloaded to a broad install with `npm install`. To download node please install with `npm install node`
3. Install several needed frameworks and dependencies with `npm install express`, `npm install pg`, `npm install db-migrate`, `npm install react-dom`, `npm install react-native`, `npm install db-migrate-pg`, `npm install body-parser`, `npm install axios`, `npm install nodemon`.
4. Now you will need to download things that you might not have already on your local machine. Download DBeaver. This will create a UI to interact with your db. You will also need to download postgres as well to create a local database. Be careful when setting up the postgres. It's important to have the same credentials so the program can connect to your local db without needing configuration changes every time. You will need to run the db server once installed with `pg_ctl -D /usr/local/var/postgres start` and `pg_ctl -D "C:\Program Files\PostgreSQL\9.6\data" start` for windows. Obv change the version number if you downloaded another one or else it won't find it.
5. **These are the credentials I need you to have for your local postgres db when you first install it**
  * host = `localhost` (automatic)
  * user = `root`
  * password = `password`

Then create a database once you log in using `psql -u root -p` and type `CREATE DATABASE capstone`. We want it called capstone!

# Migrations
Migrations are performed with db-migrate dependency. Migrations are a way to update the schema and structure of our DB without having to delete and recreate every time. It manages to change a bit of it at a time without touching the actual data in the DB. For example we can add a new column to a table and it will add it without needing to restart the DB or change anything around. It's a safe way to work with our db.

To create a Migration first make sure the config files are correct with the right credentials. They should be. After you want to actually make a new migration by typing the command in the `_Database` folder, `db-migrate-create <name of migration> --config ./config/dev.json` This will create three files in the folder. One new JS file you don't need to touch. The two others will be .sql files. Both with numbers which is their serial number and timestamp and the name of the migration you gave. One will be `up` the other `down`. `Up` is the file you add the SQL statements that you want to change the DB and the `down` is the opposite. It's the file you want to go back to an original version. So always make the `down` file to undo whatever you did in the `up`. 

Once you've updated the two .sql files you can now test the migrations. You can run migrations on all three DBs test,dev,and prod. Be careful with prod ofc only when you know it works but the dev and test are the ones you can try. You run then by doing `db-migrate up --config ./config/test.json`. If you want to run it for dev db or prod just switch the name of the filepath. Same if you want to go back you can just replace up with down. You can now go to DBeaver and login to the database and you should easily see and find your changes to the schema of the DB by seeing if that new column was added or table or whatever. Test is for your local so no one else can see but dev goes to our dev server DB so everyone can test and see your migration. Usually you'll want to run the migrations on your test local and then try them on dev.
