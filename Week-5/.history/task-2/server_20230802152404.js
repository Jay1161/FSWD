const express = require('express');
const Joi = require('joi');

const app = express();

// Create a schema for the user object.
const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number(),
});

// Create a middleware to validate the data.
app.use(express.json());

// Create a route to create a user.
app.post('/users', function(req, res) {
  const { name, email, age } = req.body;

  // Validate the data.
  const result = schema.validate({ name, email, age });
  if (result.error) {
    res.status(400).json({ errors: result.errors });
  } else {
    // The data is valid.
    res.status(201).json({
      message: 'User created successfully.',
    });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});