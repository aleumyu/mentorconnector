var express = require('express');
var router = express.Router();
var db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ response: 'Express reponse' });
});


router.get('/api/v1/users/:id/favorites', function(req, res, next) {
  
  db(`SELECT photo, industry, jobType, location, firstName, lastName FROM user u INNER JOIN favorites f ON u.userId=f.userId WHERE f.userId=${req.params.id}`)
    .then(results => {
      if (results.error) {
        console.log('as');
        res.status(500).send(results.error);
      }
      console.log('results: ' + JSON.stringify(results.data));
      res.send(results.data);
    })
});

router.post('/api/v1/users/:id/favorites', function(req, res, next) {
  db(`INSERT INTO favorites (userId, selectedUserId) VALUES (${req.body.userId}, ${req.body.selectedUserId};`)
  .then(results => {
    if (results.error) {
      res.status(500).send(resutls.error);
    }
    res.send(results.data);
  })
});

router.delete('/api/v1/users/:id1/favorites/:id2', function(req, res, next) {
  db(`DELETE FROM favorites WHERE selectedUserId=${req.params.id2} AND userId=${req.params.id1};`)
  .then(results => {
    if (results.error) {
      res.status(500).send(results.error);
    }
    res.send(results.data);
  })

})




module.exports = router;
