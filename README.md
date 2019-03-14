# Mentor Connector 

## Setup

### Database prep
- Create the local MySQL database and table(s) to be used by your app.
- Add a `.env` to your /api folder containing the MySQL authentication information for the root user as well as the name of your database. For example:    
DB_PASS=YOURPASSWORD  
DB_NAME=YOURDATABASE

### Dependencies
- Run `yarn` in project directory. This will install root project dependencies such as `npm-run-all`.
- Run `yarn install-all` (also within project directory). This will install dependencies for both api (server) and client (react) directories.

### Run Your Build
- Run `yarn start` in project directory. This will start both `api` and `client` servers in parallel.

## Next steps
- Don't forget to create a `.gitignore` file in your project root and add files such as your `.env` and `/node_modules` directories.
- Modify your code as you please and make sure to commit changes to your own repository!  

## Create database 
- Open terminal and enter the following text: 
- Mysql -u root -p
    [password]
- CREATE DATABASE mentorship;
- USE mentorship;

## Add tables
- Open terminal and navigate to the API folder. Enter the following text: 
- yarn add db-migrate-mysql
- 

_This is a project that was created at [Codely](http://codely.tech), a full stack development bootcamp in Barcelona._

------------------------------------------







