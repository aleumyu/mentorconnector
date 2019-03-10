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
  db.runSql('DELETE FROM user', [], function() {});
  db.runSql('DELETE FROM favorites', [], function() {});
  db.runSql('DELETE FROM interests', [], function() {});
  db.runSql('ALTER TABLE user AUTO_INCREMENT = 1;', [], function() {});
  db.runSql('ALTER TABLE favorites AUTO_INCREMENT = 1;', [], function() {});
  db.runSql('ALTER TABLE interests AUTO_INCREMENT = 1;', [], function() {});
  db.runSql('INSERT INTO user (email, password, photo, industry, jobType, years, intro, location, role, meeting, firstName, lastName) VALUES ("aleum@gmail.com", "12345", "img", "tech", "developer", 1, "blablabla", "Barcelona", 1, 1, "Aleum", "Yang")', [], function() {});
  db.runSql('INSERT INTO user (email, password, photo, industry, jobType, years, intro, location, role, meeting, firstName, lastName) VALUES ("hana@gmail.com", "123456", "img", "tech", "developer", 1, "blablablaaaa", "toronto", 1, 1, "Hana", "Drdla")', [], function() {});
  db.runSql('INSERT INTO user (email, password, photo, industry, jobType, years, intro, location, role, meeting, firstName, lastName) VALUES ("dan@gmail.com", "123457", "img", "tech", "developer", 5, "hahahaha", "toronto", 0, 1, "Dan", "Kostiuk")', [], function() {});
  db.runSql('INSERT INTO user (email, password, photo, industry, jobType, years, intro, location, role, meeting, firstName, lastName) VALUES ("guilia@gmail.com", "123458", "img", "tech", "office manager", 2, "ohohohoh", "rome", 2, 1, "Giulia", "aaaa")', [], function() {});
  db.runSql('INSERT INTO user (email, password, photo, industry, jobType, years, intro, location, role, meeting, firstName, lastName) VALUES ("katrina@gmail.com", "123459", "img", "tech", "ceo", 4, "wowwwwwwwww", "san francisco", 0, 1, "Katrina", "aaaa")', [], function() {});
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (1, 3)', [], function() {});
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (1, 4)', [], function() {});
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (1, 5)', [], function() {});
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (2, 3)', [], function() {});
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (2, 5)', [], function() {});
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (3, 4)', [], function() {});
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (4, 1)', [], function() {});
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (4, 5)', [], function() {});
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (5, 1)', [], function() {});
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (5, 2)', [], function() {});
  db.runSql('INSERT INTO favorites (userId, selectedUserId) VALUES (5, 3)', [], function() {});  
  db.runSql('INSERT INTO interests (userId, interestTag) VALUES (1, "job"), (1, "cv"), (1, "salary"), (2, "business"), (2, "job"), (3, "salary"), (4, "balance"), (4, "cv"), (5, "business")', [], function() {});  
  callback();
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
