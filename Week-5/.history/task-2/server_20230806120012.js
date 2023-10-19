// const express = require('express');
// const Joi = require('joi');

// const app = express();

// const schema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   age: Joi.number(),
// });

// app.use(express.json());

// app.post('/users', function(req, res) {
//   const { name, email, age } = req.body;

//   const result = schema.validate({ name, email, age });
//   if (result.error) {
//     res.status(400).json({ errors: result.errors });
//   } else {
//     res.status(201).json({
//       Name: name,
//       Email: email,
//       Age: age,
//     });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000.');
// });

const express = require('express');
const validator = require('validator');

const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Validation function for user registration data
function validateUserData(data) {
  if (!data.name || !validator.isString(data.name)) {
    return 'Name is required and should be a string.';
  }

  if (!data.email || !validator.isEmail(data.email)) {
    return 'Email is required and should be a valid email address.';
  }

  if (!data.password || !validator.isLength(data.password, { min: 6 })) {
    return 'Password is required and should be at least 6 characters long.';
  }

  return null; // No validation errors
}

// API endpoint for user registration
app.post('/register', (req, res) => {
  const userData = req.body;

  // Validate the user data
  const validationError = validateUserData(userData);

  if (validationError) {
    // Return an error response if the data is invalid
    return res.status(400).json({ error: validationError });
  }

  // Your logic to save the user data to the database or perform other actions
  // For demonstration purposes, let's just send a success response
  return res.status(200).json({ message: 'User registered successfully.' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});