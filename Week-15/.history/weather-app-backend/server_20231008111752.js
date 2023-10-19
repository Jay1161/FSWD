const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/weather', (req, res) => {
  try {
    const weatherData = JSON.parse(fs.readFileSync('weatherData.json', 'utf8'));
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
