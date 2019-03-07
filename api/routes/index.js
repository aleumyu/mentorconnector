var express = require('express');
var router = express.Router();
var db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ response: 'Express reponse' });
});


router.get('/api/v1/users/:id/favorites', function(req, res, next) {
  
  db(`SELECT f.userId, photo, industry, jobType, location, firstName, lastName, f.selectedUserId FROM user u INNER JOIN favorites f ON u.userId=f.selectedUserId WHERE f.userId=${req.params.id};`)
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

})




module.exports = router;
