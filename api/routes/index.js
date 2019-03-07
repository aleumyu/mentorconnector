var express = require('express');
var router = express.Router();
var db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ response: 'Express reponse' });
});

router.get('/api/v1/users/:id', (req, res, next) => {
  db('SELECT * FROM user WHERE user.userId =' + `${req.params.id}`)
    .then(results => {
      if (results.error) {
        res.status(500).send(results.error);
      }
      console.log('results: ' + JSON.stringify(results.data));
      res.send(results.data);
    })
});

// http://localhost:9000/api/v1/user?role=${roleParam}&industry=${industryParam}&meeting=${meetingParam}&interests=${interestsParam}&location=${locationParam}`

router.get('/api/v1/users/', function (req, res, next) {
  let industryParam = req.query.industry;
  let locationParam = req.query.location;
  let roleParam = req.query.role;
  let meetingParam = req.query.meeting;
  let interestsParam = req.query.interest;

  if (!interestsParam && !roleParam && !meetingParam && !industryParam && !locationParam) {
    db('SELECT * FROM user ORDER BY id ASC;')
      .then(results => {
        if (results.error) {
          res.status(500).send(results.error);
        }
        console.log('results: ' + JSON.stringify(results.data));
        res.send(results.data);
      })
  } else if (interestsParam && roleParam && meetingParam && industryParam && locationParam) {
    db(`SELECT u.userId, industry, location, role, meeting, firstName FROM user u INNER JOIN interests i ON u.userId=i.userId WHERE u.role="${roleParam}" AND u.industry="${industryParam}" AND u.location="${locationParam}" AND u.role="${roleParam}" AND u.meeting="${meetingParam}" AND i.interestTag=${interestsParam};`)
      .then(results => {
        if (results.error) {
          res.status(500).send(results.error);
        }
        console.log('results: ' + JSON.stringify(results.data));
        res.send(results.data);
      })
  } else { 
    let baseQuery = "SELECT u.userId, industry, location, role, meeting, firstName FROM user u INNER JOIN interests i ON u.userId=i.userId WHERE ";
    let fullQuery = baseQuery;
    let containOtherQuery = false;

    if (roleParam) {
      roleParam = locParam.split(',').map( e => `u.role="${e}" OR u.role="2"`).join(' OR ');
      fullQuery += `${roleParam}`;
      containOtherQuery = true;
    }
    if (meetingParam) {
      meetingParam = meetingParam.split(',').map( e => `u.meeting="${e}" OR u.meeting="2"`).join(' OR ');
      if (containOtherQuery) {
        fullQuery += `AND ${meetingParam}`;
      } else {
        fullQuery += `${meetingParam}`;
        containOtherQuery = true;
      }
    }
    if (interestsParam) {
      interestsParam = interestsParam.split(',').map( e => `u.interests="${e}"`).join(' OR ');
      if (containOtherQuery) {
        fullQuery += `AND ${interestsParam}`;
      } else {
        fullQuery += `${interestsParam}`;
        containOtherQuery = true;
      }
    }
    if (industryParam) {
      industryParam = industryParam.split(',').map( e => `u.industry="${e}"`).join(' OR ');
      if (containOtherQuery) {
        fullQuery += `AND ${industryParam}`;
      } else {
        fullQuery += `${industryParam}`;
        containOtherQuery = true;
      }
    }
    if (locationParam) {
      locationParam = locationParam.split(',').map( e => `u.role="${e}" OR u.location="2"`).join(' OR ');
      if (containOtherQuery) {
        fullQuery += `AND ${locationParam}`;
      } else {
        fullQuery += `${locationParam}`;
        containOtherQuery = true;
      }
    }
    db(`${fullQuery};`)
      .then(results => {
        if (results.error) {
          res.status(500).send(results.error);
        }
        console.log('results: ' + JSON.stringify(results.data));
        res.send(results.data);
      })
  }
});

module.exports = router;
