const express = require('express');
const Joi = require('joi');

const app = express();

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number(),
});

app.use(express.json());

app.post('/users', function(req, res) {
  const { name, email, age } = req.body;

  const result = schema.validate({ name, email, age });
  if (result.error) {
    res.status(400).json({ errors: result.errors });
  } else {
    res.status(201).json({
      Name: name,
      Email: email,
      Age: age,
    });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
