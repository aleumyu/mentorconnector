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
  db.runSql('DELETE FROM interests', [], function() {});
  db.runSql('ALTER TABLE interests AUTO_INCREMENT = 1;', [], function() {});
  db.runSql('INSERT INTO interests (userId, interestTag) VALUES (1, "job"), (1, "cv"), (1, "salary"), (2, "business"), (2, "job"), (3, "salary"), (4, "balance"), (4, "cv"), (5, "business")', [], function() {});  
  callback();
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
