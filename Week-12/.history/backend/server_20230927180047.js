// server.js

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

// API to set and get the background color cookie
app.get('/api/color', (req, res) => {
  const { color } = req.query;

  // Set a cookie named "backgroundColor" with the chosen color
  res.cookie('backgroundColor', color, { maxAge: 900000 }); // Max age in milliseconds

  res.send({ success: true });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});