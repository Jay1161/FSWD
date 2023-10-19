const express = require('express');
const validator = require('validator');

const app = express();

app.use(express.json());

app.post('/validate', (req, res) => {
  const { name, email, password } = req.body;

  const validationSchema = {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
    },
  };

  const errors = validator.validate(req.body, validationSchema);

  if (errors.length) {
    res.status(400).json({ errors });
  } else {
    res.status(200).json({ success: true });
  }
});

app.listen(3000, () => console.log('Server started on port 3000.'));