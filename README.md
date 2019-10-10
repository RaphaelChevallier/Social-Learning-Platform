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

# Running the app on Local Computer
To run the app on your editor and see the changes for yourself you just need to run two things. Have two tabs in the terminal running at the same time. Run `node server.js` for one tab in the `Social-Learning-Platform` folder. The other tab go to the `client` folder and run `npm start`. These should then open a browser window in your default browser with the app! You can now test and see all the changes in your local development.

### Database check
To see the database changes and additions or whatever when you are playing around with it go to DBeaver. Open DBeaver and open a new connection with the icon on the top left. It will give you a list of DBs to choose from and choose Postgres. It'll look like an elephant. Once clicked it'll ask for credentials. Same as above fill those out. It'll then create a connection and save that DB and you can just click on it in the UI and open the tables and schemas.

# Migrations
Migrations are performed with db-migrate dependency. Migrations are a way to update the schema and structure of our DB without having to delete and recreate every time. It manages to change a bit of it at a time without touching the actual data in the DB. For example we can add a new column to a table and it will add it without needing to restart the DB or change anything around. It's a safe way to work with our db.

To create a Migration first make sure the config files are correct with the right credentials. They should be. After you want to actually make a new migration by typing the command in the `_Database` folder, `db-migrate-create <name of migration> --config ./config/dev.json` This will create three files in the folder. One new JS file you don't need to touch. The two others will be .sql files. Both with numbers which is their serial number and timestamp and the name of the migration you gave. One will be `up` the other `down`. `Up` is the file you add the SQL statements that you want to change the DB and the `down` is the opposite. It's the file you want to go back to an original version. So always make the `down` file to undo whatever you did in the `up`. 

Once you've updated the two .sql files you can now test the migrations. You can run migrations on all three DBs test,dev,and prod. Be careful with prod ofc only when you know it works but the dev and test are the ones you can try. You run then by doing `db-migrate up --config ./config/test.json`. If you want to run it for dev db or prod just switch the name of the filepath. Same if you want to go back you can just replace up with down. You can now go to DBeaver and login to the database and you should easily see and find your changes to the schema of the DB by seeing if that new column was added or table or whatever. Test is for your local so no one else can see but dev goes to our dev server DB so everyone can test and see your migration. Usually you'll want to run the migrations on your test local and then try them on dev.

# Pushing your changes
Once you've done all the coding and whatnot you can go ahead and create a pull request on github by pushing to it. However, if you want, you can also push to the Heroku dev server so we can all see your changes at once as if they were live. It's ok to push to this whenever you want but don't just randomly push to it. You need to first look on trello and make sure no one elses card is on staged. This means they are using the server for their own branch and you deploying to it will just erase their changes. Now to set up your local to be able to push to the dev server you must first get the Heroku CLI. Go to this link and install the cli to your machine: https://devcenter.heroku.com/articles/heroku-cli.

Once that is done please head over to your terminal and type `heroku login`. It will ask for credentials. You can all just use my account credentials which are: 

email: `raphaelchevallier33@gmail.com`

password: `Password-capstone`

Once logged in it will remember you. But if it doesn't just refer back to here. 

Now you must set a remote for your local repository on your computer. This will let you push to the dev server similar to how you say `git push` to github. Go to the `Social-Learning-Platform` folder and type `heroku git:remote -a giddy-up-dev` and then type `git remote rename heroku dev`.

Now everytime you have a change to your local and want to test it on the dev server just do the usual `git add` then `git commit -m` however instead of `git push` you just need to do `git push dev master`. And once you go on the heroku url you will see your changes.

I would only really use this for when you finish a feature though as it takes a minute for the app to load again. Test everything on your local then go and try it out on the dev server.
