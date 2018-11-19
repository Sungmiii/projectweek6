const express = require('express');
const router = express.Router();

const db = require('../db/guests')

router.use(express.urlencoded({ extended: false }));

/* GET users listing. */
router.get('/', function (req, res) {
  console.log('llll');

  db.getGuests()
    .then(guests => {
      // console.log('serverside guests list: ', guests)
      res.json(guests)
    })
    .catch(err => {
      // console.log('server err', err)
      res.status(400).send('Bad Request');
    })
});


router.post('/', (req, res) => {
  const { fullname, email, guestnum } = req.body
  console.log(req.body)
  const guest = {
    fullname,
    email,
    guestnum
  }
  console.log('db guest working?', guest.fullname)
  db.addNewGuest(guest)
    .then(() => {
      res.sendStatus(200)
    })
})
module.exports = router;
