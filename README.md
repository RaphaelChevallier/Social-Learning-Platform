# Social-Learning-Platform
Capstone Project Social Learning Platform Webapp

# Start Capstone Development
1. First please clone this repo to your local machine.
2. First we must download Node and React to your machines. I am specifically using the NPM package manager so please use that to follow with the development. Of course it's a bit different for both mac and windows so depending on your machine follow the instructions. I used homebrew to download NPM but that's not available for windows. Once the NPM is downloaded to a broad install with `npm install`. To download node please install with `npm install node`
3. Install several needed frameworks and dependencies with `npm install express`, `npm install pg`, `npm install db-migrate`, `npm install react-dom`, `npm install react-native`, `npm install db-migrate-pg`, `npm install body-parser`, `npm install axios`, `npm install nodemon`.
4. Now you will need to download things that you might not have already on your local machine. Download DBeaver. This will create a UI to interact with your db. You will also need to download postgres as well to create a local database. Be careful when setting up the postgres. It's important to have the same credentials so the program can connect to your local db without needing configuration changes every time. You will need to run the db server once installed with `pg_ctl -D /usr/local/var/postgres start` and `pg_ctl -D "C:\Program Files\PostgreSQL\9.6\data" start` for windows. Obv change the version number if you downloaded another one or else it won't find it.
5. **These are the credentials I need you to have for your local postgres db when you first install it**
  * host = `localhost` (automatic)
  * user = `root`
  * password = `password`

Then create a database once you log in using `psql -u root -p` and type `CREATE DATABASE capstone`. We want it called capstone!
