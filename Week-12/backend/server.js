const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3001;

app.use(cookieParser());

app.get('/currentcolor', (req, res) => {
  const backgroundColor = req.cookies.backgroundColor || 'white';
  res.json({ backgroundColor });
});

app.post('/setBackgroundColor', (req, res) => {
  const { backgroundColor } = req.body;
  res.cookie('backgroundColor', backgroundColor);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
