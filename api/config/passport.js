const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../model/helper');

module.exports = function(passport) {
	passport.use(
		new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
			db(`SELECT userId, email, password FROM user WHERE email="${email}"`).then((results) => {
				if (results.data[0] && results.data[0].email !== email) {
                    console.log(results)
					return done(null, false, 'This email does not exist');
				} else if (results.data[0] && results.data[0].email === email) {
					bcrypt.compare(password, results.data[0].password, function(err, result) {
                        console.log("thisispassword:" + password);
                        console.log("thisisresults" + results.data[0].password);
						if (result == true) {
							return done(null, results.data[0], 'Password correct');
						} else {
							return done(null, false, 'Password incorrect');
						}
					});
				}
			});

			passport.serializeUser(function(user, done) {
                console.log("user:" + JSON.stringify(user))
                console.log("user.id:" + user.userId)
         
				done(null, user.userId);
			});

			passport.deserializeUser(function(id, done) {
                db(`SELECT userId, email, password FROM user WHERE userId=${id}`)
                .then (results => {
                    console.log('results is' + results);
                    done(null, results.data[0]);
                });
			});
		})
	);
};
