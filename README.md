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
- CREATE TABLE user (userId INT(11) NOT NULL AUTO_INCREMENT, email VARCHAR(100) NOT NULL, password VARCHAR(30) NOT NULL, photo VARCHAR(200), industry VARCHAR(50), jobType VARCHAR(50), years TINYINT(1), intro TEXT, location VARCHAR(30), role TINYINT(1), meeting TINYINT(1), firstName VARCHAR(30), lastName VARCHAR(30), PRIMARY KEY (userId));
- CREATE TABLE interests (interestId INT(11) NOT NULL AUTO_INCREMENT, userId INT(11), interestTag VARCHAR(100), PRIMARY KEY (interestId));
- CREATE TABLE favorites (favoriteId INT(11) NOT NULL AUTO_INCREMENT, userId INT(11), selectedUserId INT(11), PRIMARY KEY (favoriteId));
- CREATE TABLE message (messageId INT(11) NOT NULL AUTO_INCREMENT, userId INT(11), receiverId INT (11), status BOOLEAN, message TEXT, date DATETIME, PRIMARY KEY (messageId));

_This is a project that was created at [Codely](http://codely.tech), a full stack development bootcamp in Barcelona._

------------------------------------------







