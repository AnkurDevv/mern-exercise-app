const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// if its only /users/ then this happens | see comment 2
router.route('/').get((req, res) => {
  Exercise.find()
    // once you find exercises return them as JSON 
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

//2: if its only /users/add then this happens 
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  // Convt a number to date 
  const date = Date.parse(req.body.date);

  // creating an exercise using all variables we got up here
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  // save the DB and return the valid added
  newExercise.save()
    .then(() => res.json('Exercise added !'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// finding an exercise by an ID 
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(() => res.json('Exercise Added !'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// finding an exercise by ID and deleting it 
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted !'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// finding an exercise by ID and updating it 
router.route('/:id').delete((req, res) => {
  Exercise.findById(req.params.id)
    .then(() => res.json('Exercise Updated !'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;