// server.js

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());

app.post('/api/setColor', (req, res) => {
  const { color } = req.body;
  res.cookie('backgroundColor', color, { maxAge: 900000, httpOnly: true });
  res.send('Background color set successfully!');
});

app.get('/api/getColor', (req, res) => {
  const backgroundColor = req.cookies.backgroundColor || 'white';
  res.send({ color: backgroundColor });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
