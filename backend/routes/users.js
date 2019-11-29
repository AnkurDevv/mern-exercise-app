const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    //res.json() means you are returning something in JSON format
    .then(users => res.json(users))
    // if error rtn status 400 with the error message
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  // new username is part of request hence, req.body.username
  const username = req.body.username;
  //using user model schema to add the user 
  const newUser = new User({ username });
  // finally, user is saved in DB using save() method 
  newUser.save()
    .then(() => res.json('User added !'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;