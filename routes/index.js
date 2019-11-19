var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Gitartha', some: 'dfhjdjfjdh',
    names: [
      {fname: 'Gitartha', lname: 'Kashyap'},
      {fname: 'utkal', lname: 'das'},
      {fname: 'Nihal', lname: 'Buragohain'},
      {fname: 'Madhuzya', lname: 'Bezbaruah'}
    ],
    show: false
  });
});

module.exports = router;
