'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  //delete all existing tables
  db.runSql('DROP TABLE user;', [], function() {});
  db.runSql('DROP TABLE interests;', [], function() {});
  db.runSql('DROP TABLE favorites;', [], function() {});
  db.runSql('DROP TABLE message;', [], function() {});
  //create tables 
  db.runSql('CREATE TABLE user (userId INT(11) NOT NULL AUTO_INCREMENT, email VARCHAR(100) NOT NULL, password TEXT NOT NULL, photo VARCHAR(200), industry VARCHAR(50), jobType VARCHAR(50), years TINYINT(1), intro TEXT, country VARCHAR(30), city VARCHAR(30), role TINYINT(1), meeting TINYINT(1), firstName VARCHAR(30), lastName VARCHAR(30), PRIMARY KEY (userId))', [], function() {});
  db.runSql('CREATE TABLE interests (interestId INT(11) NOT NULL AUTO_INCREMENT, userId INT(11), interestTag VARCHAR(100), PRIMARY KEY (interestId))', [], function() {});
  db.runSql('CREATE TABLE favorites (favoriteId INT(11) NOT NULL AUTO_INCREMENT, userId INT(11), selectedUserId INT(11), PRIMARY KEY (favoriteId))', [], function() {});
  db.runSql('CREATE TABLE message (messageId INT(11) NOT NULL AUTO_INCREMENT, userId INT(11), receiverId INT (11), status BOOLEAN, message TEXT, date DATETIME, PRIMARY KEY (messageId))', [], function() {});
  //add new rows into interests
  db.runSql('INSERT INTO interests (userId, interestTag) VALUES (1, "Networking"), (1, "Leadership"), (1, "Career Transition"), (2, "Technical Skills"), (2, "Job Search"), (3, "Networking"), (4, "Entrepreneurship"), (4, "Networking"), (5, "Technical Skills")', [], function() {});  
  //add new rows into user
  db.runSql('INSERT INTO user (email, password, photo, industry, jobType, years, intro, country, city, role, meeting, firstName, lastName) VALUES ("aleum@gmail.com", "12345", "https://media.licdn.com/dms/image/C5603AQHrpmMeUgCcgQ/profile-displayphoto-shrink_800_800/0?e=1557964800&v=beta&t=Bh4AyeoSr_LJgJp7DBygN5LF3DMd27pU6LaIcNOzJDY", "Full stack development", "Junior Developer", 1, "blablabla", "Spain", "Barcelona", 2, 0, "Aleum", "Yang")', [], function() {});
  db.runSql('INSERT INTO user (email, password, photo, industry, jobType, years, intro, country, city, role, meeting, firstName, lastName) VALUES ("hana@gmail.com", "123456", "https://media.licdn.com/dms/image/C4D03AQEgJd2jcahnMA/profile-displayphoto-shrink_200_200/0?e=1557964800&v=beta&t=nWVw0VKC-eqYncEQtG33xLcjYnCRGUexDM7HF5xMd8g", "Full stack development", "Junior Developer", 1, "blablablaaaa", "Canada", "Toronto", 2, 10, "Hana", "Drdla")', [], function() {});
  db.runSql('INSERT INTO user (email, password, photo, industry, jobType, years, intro, country, city, role, meeting, firstName, lastName) VALUES ("dan@gmail.com", "123457", "https://media.licdn.com/dms/image/C4E03AQEt7XqgeWW5PA/profile-displayphoto-shrink_800_800/0?e=1557964800&v=beta&t=bTYok9KAuZZKLKoEr2ysZqIN-sCeMi8_W5_7ob_GTfg", "Back-end development", "Java Developer", 5, "hahahaha", "Canada", "Toronto", 1, 20, "Dan", "Kostiuk")', [], function() {});
  db.runSql('INSERT INTO user (email, password, photo, industry, jobType, years, intro, country, city, role, meeting, firstName, lastName) VALUES ("guilia@gmail.com", "123458", "https://media.licdn.com/dms/image/C4E03AQEjv_ljg1PUDQ/profile-displayphoto-shrink_800_800/0?e=1557964800&v=beta&t=32KutTAOmxZBSIQXGJTd22tt0VbNMKbs23ixPdfm82o", "Community Management", "Office Manager", 2, "ohohohoh", "Italy", "Rome", 2, 10, "Giulia", "Ferrari")', [], function() {});
  db.runSql('INSERT INTO user (email, password, photo, industry, jobType, years, intro, country, city, role, meeting, firstName, lastName) VALUES ("katrina@gmail.com", "123459", "https://media.licdn.com/dms/image/C5603AQFcTm7xEarV6A/profile-displayphoto-shrink_800_800/0?e=1557964800&v=beta&t=ipLoeugYuwEGXIt7hs2xqcaBxKO6c4gPxDaZMkDDCzs", "Data Science", "CEO at Codely", 4, "wowwwwwwwww", "United States", "San Francisco", 0, 20, "Katrina", "Walker")', [], function() {});
  //add new rows into favorites
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (1, 3), (1, 4), (1, 5), (2, 3), (2, 5), (3, 4), (4, 1), (4, 5), (5, 1), (5, 2), (5, 3)', [], function() {});
  //authentication
  db.runSql('ALTER TABLE user ADD UNIQUE (email)', [], function() {});
  callback();
};   

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
