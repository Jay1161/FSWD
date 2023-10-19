// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.route('/').get((req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;
  const completed = req.body.completed;

  const newTask = new Task({ description, completed });

  newTask
    .save()
    .then(() => res.json('Task added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
