const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3001;

app.use(express.json()); // Add this middleware to parse JSON requests
app.use(cookieParser());

app.get('/getBackgroundColor', (req, res) => {
  try {
    const backgroundColor = req.cookies.backgroundColor || 'white';
    res.json({ backgroundColor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/setBackgroundColor', (req, res) => {
  try {
    const { backgroundColor } = req.body;
    res.cookie('backgroundColor', backgroundColor);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
