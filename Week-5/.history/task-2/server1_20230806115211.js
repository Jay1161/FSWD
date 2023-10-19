const express = require('express');
const validator = require('validator');

const app = express();

const validateuser = {
  name: {
    required: true,
    type: 'string',
  },
  email: {
    required: true,
    type: 'string',
    email: true,
  },
  age: {
    required: true,
    type: 'number',
  },
};

app.use(express.json());

app.post('/users', (req, res) => {
  const { name, email, age } = req.body;

  const errors = validator.validate(req.body, validateuser);

  if (errors.length) {
    res.status(400).json({ errors });
  } else {
    res.status(201).json({
      Name: name,
      Email: email,
      Age: age,
    });
  }
});

app.listen(3000, () => console.log('Server started on port 3000.'));