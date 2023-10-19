const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/weatherapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Weather API endpoint
app.get('/api/weather', async (req, res) => {
  try {
    const city = req.query.city;
    const apiKey = 'e39c907fd8d6c4bddafe44779499bc7d';
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=${apiKey}`);
    
    res.json(weatherResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching weather data.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
