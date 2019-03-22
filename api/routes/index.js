var express = require("express");
var router = express.Router();
var db = require('../model/helper');
var bcrypt = require('bcrypt');
var passport = require('passport');
var { ensureAuthenticated } = require('../config/auth');
const saltRounds = 10;

/* GET landing page. */
router.get('/', function(req, res, next) {
  bcrypt.hash('123456', saltRounds, function(err, hash) {

    console.log(hash);

    bcrypt.compare('123456', '$2b$10$HpUkpo0V3vXWgiHBLEEF9u51vihL9EVWxCXmKhlyh2ylQdOeS1api', function(err, result) {
      if (result == true) {
        console.log("whatever2")
        
      } else {
        console.log("whatever3")
        
      }
    });
  });

	res.send({ response: 'Express reponse' });
});

router.get('/api/v1/users/:id', ensureAuthenticated, (req, res, next) => {
  /*console.log(req.session.passport.user);

  if (req.session.passport.user !== req.params.id) {
    // return error response
  }*/
  db(`SELECT * FROM user WHERE userId=${req.params.id};`)
  .then((results) => {
		if (results.error) {
			res.status(500).send(results.error);
		}
		console.log('results: ' + JSON.stringify(results.data));
		res.send(results.data);
	});
});

router.get('/api/v1/users/:id/interests', ensureAuthenticated, (req, res, next) => {
  
	db(`SELECT * FROM interests WHERE userId=${req.params.id};`).then((results) => {
		if (results.error) {
			res.status(500).send(results.error);
		}
		console.log('results: ' + JSON.stringify(results.data));
		res.send(results.data);
	});
});

router.get('/api/v1/users/', ensureAuthenticated, function(req, res, next) {
	let roleParam = req.query.role;
	let industryParam = req.query.industry;
	let meetingParam = req.query.meeting;
	let interestsParam = req.query.interestTag;
	let countryParam = req.query.country;
	let cityParam = req.query.city;

	if (!interestsParam && !roleParam && !meetingParam && !industryParam && !countryParam && !cityParam) {
		db('SELECT * FROM user ORDER BY userId ASC;').then((results) => {
			if (results.error) {
				res.status(500).send(results.error);
			}
			console.log('results: ' + JSON.stringify(results.data));
			res.send(results.data);
		});
	} else {
		let baseQuery =
			'SELECT DISTINCT u.userId, u.industry, u.jobType, u.country, u.city, u.role, u.firstName, u.lastName, u.photo FROM user u INNER JOIN interests i ON u.userId=i.userId WHERE ';
		let containOtherQuery = false;

		if (roleParam) {
			roleParam = roleParam.split(',').map((e) => `u.role="${e}"`).join(' OR ');
			baseQuery += `${roleParam}`;
			containOtherQuery = true;
		}
		if (industryParam) {
			industryParam = industryParam.split(',').map((e) => `u.industry="${e}"`).join(' OR ');
			if (containOtherQuery) {
				baseQuery += `AND ${industryParam}`;
			} else {
				baseQuery += `${industryParam}`;
				containOtherQuery = true;
			}
		}
		if (meetingParam) {
			meetingParam = meetingParam.split(',').map((e) => `u.meeting="${e}"`).join(' OR ');
			if (containOtherQuery) {
				baseQuery += `AND ${meetingParam}`;
			} else {
				baseQuery += `${meetingParam}`;
				containOtherQuery = true;
			}
		}
		if (interestsParam) {
			interestsParam = interestsParam.split(',').map((e) => `i.interestTag="${e}"`).join(' OR ');
			if (containOtherQuery) {
				baseQuery += `AND ${interestsParam}`;
			} else {
				baseQuery += `${interestsParam}`;
				containOtherQuery = true;
			}
		}
		if (cityParam) {
			cityParam = cityParam.split(',').map((e) => `u.city="${e}"`).join(' OR ');
			if (containOtherQuery) {
				baseQuery += `AND ${cityParam}`;
			} else {
				baseQuery += `${cityParam}`;
				containOtherQuery = true;
			}
		}
		if (countryParam) {
			countryParam = countryParam.split(',').map((e) => `u.country="${e}"`).join(' OR ');
			if (containOtherQuery) {
				baseQuery += `AND ${countryParam}`;
			} else {
				baseQuery += `${countryParam}`;
				containOtherQuery = true;
			}
		}
		db(`${baseQuery};`).then((results) => {
			if (results.error) {
				res.status(500).send(results.error);
			}
			console.log('results: ' + JSON.stringify(results.data));
			res.send(results.data);
		});
	}
});



router.get('/api/v1/users/:id/favorites', ensureAuthenticated, function(req, res, next) {
	db(
		`SELECT f.userId, photo, industry, jobType, country, city, firstName, lastName, f.selectedUserId FROM user u INNER JOIN favorites f ON u.userId=f.selectedUserId WHERE f.userId=${req
			.params.id};`
	).then((results) => {
		if (results.error) {
			res.status(500).send(results.error);
		}
		console.log('results: ' + JSON.stringify(results.data));
		res.send(results.data);
	});
});

router.post('/api/v1/users/:id/favorites', ensureAuthenticated, function(req, res, next) {
	db(
		`INSERT INTO favorites (userId, selectedUserId) VALUES (${req.params.id}, ${req.body.selectedUserId});`
	).then((results) => {
		if (results.error) {
			res.status(500).send(resutls.error);
		}
		res.send(results.data);
	});
});

router.delete('/api/v1/users/:id1/favorites/:id2', function(req, res, next) {
	db(`DELETE FROM favorites WHERE userId=${req.params.id1} AND selectedUserId=${req.params.id2};`).then((results) => {
		if (results.error) {
			res.status(500).send(results.error);
		}
		res.send(results.data);
	});
});

/* POST login. */
router.post('/api/v1/signin', function(req, res, next) {
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/'
	})(req, res, next);
});

/*GET login */

router.get('/login', ensureAuthenticated, function(req, res, next) {
	
  console.log("GETLOGIN" + JSON.stringify(req.session.passport));
  console.log('GET login called');
 
  db(`SELECT userId FROM user WHERE userId=${req.session.passport.user}`)
    .then((results) => {
      if (results.error) {
        res.status(500).send(results.error);
      }
      console.log('results: ' + JSON.stringify(results.data));
      res.send(results.data);
    });

});


	/*).then((results) => {
		if (results.error) {
			res.status(500).send(results.error);
		}
		console.log('results: ' + JSON.stringify(results.data));
		res.send(results.data);
	});*/

router.post('/api/v1/register', function(req, res, next) {
	db(`SELECT email FROM user WHERE email="${req.body.email}"`)
	.then((results) => {
		if (results.data[0] && results.data[0].email === req.body.email) {
			return res.status(409).send(results.error);
		} else {
			bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
				db(`INSERT INTO user (email, password) VALUES ("${req.body.email}", "${hash}");`)
				.then((results) => {
					if (results.error) {
						res.status(500).send(results.error);
          			} else {
						db(`SELECT userId FROM user WHERE email="${req.body.email}";`)
							.then((results) => {
								if (results.error) {
									console.log('error');
									throw err;
								}
								passport.authenticate('local', {
									successRedirect: '/',
									failureRedirect: '/'
								})(req, res, next);
							})
							.catch((err) => console.log(err));
						//console.log("results: " + JSON.stringify(results.data));
						//console.log(results.data[0].insertId);
			
					}

				});
			});
		}
	});
});

/* GET logout. */
router.get('/logout', function(req, res) {
	console.log('logging out...');
	req.logout();
	res.redirect('/');
});

router.put("/api/v1/users/", function(req, res, next) {
  let baseQuery = `INSERT INTO interests (userId, interestTag) VALUES `;
  let insertValues = "";

  for (let i = 0; i < req.body.interestTag.length; i++) {
    if (i === req.body.interestTag.length - 1) {
      insertValues += `((SELECT userId FROM user WHERE userId="${req.body.userId}"), "${req.body.interestTag[i]}");`;
    } else {
      insertValues += `((SELECT userId FROM user WHERE userId="${req.body.userId}"), "${req.body.interestTag[i]}"), `;
    }
  }

  db(`UPDATE user SET photo="${req.body.photo}", industry="${req.body.industry}", jobType="${req.body.jobType}", years=${req.body.years}, intro="${req.body.intro}", country="${req.body.country}", city="${req.body.city}", role=${req.body.role}, meeting=${req.body.meeting}, firstName="${req.body.firstName}", lastName="${req.body.lastName}" WHERE userId="${req.body.userId}";`);
  db(baseQuery + insertValues)
  .then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    }
    console.log("results: " + JSON.stringify(results.data));
    res.send(results.data);
  });
  
});

module.exports = router;
