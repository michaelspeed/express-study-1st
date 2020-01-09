var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const fname = 'khushi'
  const lname = 'shukla'
  const age = 18
  const home = 'dibrugarh'
  const stris = `${fname} ${lname} of age ${age} lives in ${home}`
  console.log(stris)

  let array = [1,2,3,4,5]
  array.forEach(item => {
    console.log(item)
  })

 /* res.render('index', { title: 'Gitartha', some: 'dfhjdjfjdh', hw: 'dskdjkhffffhfhfhfhfhfh',
    names: [
      {
        fname: 'Gitartha',
        lname: 'Kashyap'
      },
      {
        fname: 'utkal',
        lname: 'das'
      },
      {
        fname: 'Nihal',
        lname: 'Buragohain'
      },
      {
        fname: 'Madhuzya',
        lname: 'Bezbaruah'
      }
    ],
    show: true
  });*/
 res.render('index', {
   fname,
   lname,
   age,
   home
 })
});

router.post('/', function (req, res, next) {
  console.log(req)
})

module.exports = router;
