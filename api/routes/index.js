var express = require('express');
var router = express.Router();
var db = require("../model/helper");
var bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ response: 'Express reponse' });
});

router.get('/api/v1/users/:id', (req, res, next) => {
  db(`SELECT * FROM user WHERE userId=${req.params.id};`)
    .then(results => {
      if (results.error) {
        res.status(500).send(results.error);
      }
      console.log('results: ' + JSON.stringify(results.data));
      res.send(results.data);
    })
});

router.get('/api/v1/users/:id/interests', (req, res, next) => {
  db(`SELECT * FROM interests WHERE userId=${req.params.id};`)
    .then(results => {
      if (results.error) {
        res.status(500).send(results.error);
      }
      console.log('results: ' + JSON.stringify(results.data));
      res.send(results.data);
    })
});

router.get('/api/v1/users/', function (req, res, next) {
  let roleParam = req.query.role;
  let industryParam = req.query.industry;
  let meetingParam = req.query.meeting;
  let interestsParam = req.query.interestTag;
  let countryParam = req.query.country;
  let cityParam = req.query.city;

  if (!interestsParam && !roleParam && !meetingParam && !industryParam && !countryParam && !cityParam) {
    db('SELECT * FROM user ORDER BY userId ASC;')
      .then(results => {
        if (results.error) {
          res.status(500).send(results.error);
        }
        console.log('results: ' + JSON.stringify(results.data));
        res.send(results.data);
      })   
            
  } else { 
    let baseQuery = "SELECT DISTINCT u.userId, u.industry, u.jobType, u.country, u.city, u.role, u.firstName, u.lastName, u.photo FROM user u INNER JOIN interests i ON u.userId=i.userId WHERE ";
    let containOtherQuery = false;

    if (roleParam) {
      roleParam = roleParam.split(',').map( e => `u.role="${e}"`).join(' OR ');
      baseQuery += `${roleParam}`;
      containOtherQuery = true;
    }
    if (industryParam) {
      industryParam = industryParam.split(',').map( e => `u.industry="${e}"`).join(' OR ');
      if (containOtherQuery) {
        baseQuery += `AND ${industryParam}`;
      } else {
        baseQuery += `${industryParam}`;
        containOtherQuery = true;
      }
    }
    if (meetingParam) {
      meetingParam = meetingParam.split(',').map( e => `u.meeting="${e}"`).join(' OR ');
      if (containOtherQuery) {
        baseQuery += `AND ${meetingParam}`;
      } else {
        baseQuery += `${meetingParam}`;
        containOtherQuery = true;
      }
    }
    if (interestsParam) {
      interestsParam = interestsParam.split(',').map( e => `i.interestTag="${e}"`).join(' OR ');
      if (containOtherQuery) {
        baseQuery += `AND ${interestsParam}`;
      } else {
        baseQuery += `${interestsParam}`;
        containOtherQuery = true;
      }
    }
    if (cityParam) {
      cityParam = cityParam.split(',').map( e => `u.city="${e}"`).join(' OR ');
      if (containOtherQuery) {
        baseQuery += `AND ${cityParam}`;
      } else {
        baseQuery += `${cityParam}`;
        containOtherQuery = true;
      }
    }
    if (countryParam) {
      countryParam = countryParam.split(',').map( e => `u.country="${e}"`).join(' OR ');
      if (containOtherQuery) {
        baseQuery += `AND ${countryParam}`;
      } else {
        baseQuery += `${countryParam}`;
        containOtherQuery = true;
      }
    }     
    db(`${baseQuery};`)
      .then(results => {
        if (results.error) {
          res.status(500).send(results.error);
        }
        console.log('results: ' + JSON.stringify(results.data));
        res.send(results.data);
      })
  } 
}); 

router.put('/api/v1/users/', function(req, res, next) {
  
  let baseQuery = `INSERT INTO interests (userId, interestTag) VALUES `
  let insertValues = ""
 
  for ( let i = 0; i < req.body.interestTag.length; i++ ) {
    if ( i === req.body.interestTag.length - 1) {
      insertValues += `((SELECT userId FROM user WHERE email="${req.body.email}"), "${req.body.interestTag[i]}");`
    } else {
      insertValues += `((SELECT userId FROM user WHERE email="${req.body.email}"), "${req.body.interestTag[i]}"), `
    }
  }
  
  db(`UPDATE user SET photo="${req.body.photo}", industry="${req.body.industry}", jobType="${req.body.jobType}", years=${req.body.years}, intro="${req.body.intro}", country="${req.body.country}", city="${req.body.city}", role=${req.body.role}, meeting=${req.body.meeting}, firstName="${req.body.firstName}", lastName="${req.body.lastName}" WHERE email="${req.body.email}";`);
  db(baseQuery + insertValues)
  .then(results => {
    if (results.error) {
      res.status(500).send(resutls.error);

    }
    res.send(results.data);
  })
});

router.get('/api/v1/users/:id/favorites', function(req, res, next) {

  db(`SELECT f.userId, photo, industry, jobType, country, city, firstName, lastName, f.selectedUserId FROM user u INNER JOIN favorites f ON u.userId=f.selectedUserId WHERE f.userId=${req.params.id};`)
    .then(results => {
      if (results.error) {
        res.status(500).send(results.error);
      }
      console.log('results: ' + JSON.stringify(results.data));
      res.send(results.data);
    })
});

router.post('/api/v1/users/:id/favorites', function(req, res, next) {
  db(`INSERT INTO favorites (userId, selectedUserId) VALUES (${req.params.id}, ${req.body.selectedUserId});`)
  .then(results => {
    if (results.error) {
      res.status(500).send(resutls.error);

    }
    res.send(results.data);
  })
});

router.delete('/api/v1/users/:id1/favorites/:id2', function(req, res, next) {
  db(`DELETE FROM favorites WHERE userId=${req.params.id1} AND selectedUserId=${req.params.id2};`)
  .then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    }
    res.send(results.data);
  })
});

router.post('/api/v1/register', function(req, res, next) {
  db(`SELECT email FROM user WHERE email="${req.body.email}"`)
  .then(results => {
    if (results.data[0] && results.data[0].email === req.body.email) {
      return res.status(409).send(results.error);
    } else {
      bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        db(`INSERT INTO user (email, password) VALUES ("${req.body.email}", "${hash}");`)
        .then(results => {
          if (results.error) {
            res.status(500).send(results.error);
          }
          res.send(results.data);
        })
      })
    }
  });
});  

router.post('/api/v1/signin', function(req, res, next) {
  db(`SELECT email, password FROM user WHERE email="${req.body.email}"`)
  .then(results => {
    if (results.data[0] && results.data[0].email !== req.body.email) {
      return res.status(409).send(results.error);
      } else if (results.data[0] && results.data[0].email === req.body.email) {
        bcrypt.compare(req.body.password, results.data[0].password, function (err, result) {
          if (result == true) {
            res.status(200).send("Successful");
          } else {
            res.status(500).send("Not successful");
          }
        });        
      };  
  });
});  

router.put('/api/v1/users/', function(req, res, next) {

  let baseQuery = `INSERT INTO interests (userId, interestTag) VALUES `
  let insertValues = ""

  for ( let i = 0; i < req.body.interestTag.length; i++ ) {
    if ( i === req.body.interestTag.length - 1) {
      insertValues += `((SELECT userId FROM user WHERE email="${req.body.email}"), "${req.body.interestTag[i]}");`
    } else {
      insertValues += `((SELECT userId FROM user WHERE email="${req.body.email}"), "${req.body.interestTag[i]}"), `
    }
  }

  db(`UPDATE user SET photo="${req.body.photo}", industry="${req.body.industry}", jobType="${req.body.jobType}", years=${req.body.years}, intro="${req.body.intro}", country="${req.body.country}", city="${req.body.city}", role=${req.body.role}, meeting=${req.body.meeting}, firstName="${req.body.firstName}", lastName="${req.body.lastName}" WHERE email="${req.body.email}";`);
  db(baseQuery + insertValues)
  .then(results => {
    if (results.error) {
      res.status(500).send(resutls.error);
    }
    console.log('results: ' + JSON.stringify(results.data));
    res.send(results.data);
  })
});

module.exports = router;

