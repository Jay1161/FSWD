const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const User = mongoose.model('User', {
  email: String,
  password: String,
});

const SECRET_KEY = 'your-secret-key';

// Registration
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).send('Registration successful');
  } catch (error) {
    res.status(500).send('Registration failed');
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).send('Invalid password');
  }

  const token = jwt.sign({ userId: user._id }, SECRET_KEY);

  res.status(200).json({ token });
});

// Protected route
app.get('/protected', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }
    res.status(200).send('Welcome to the protected route');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
