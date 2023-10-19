const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const apiKey = 'YOUR_WEATHER_API_KEY';

app.get('/weather', async (req, res) => {
  try {
    const { city } = req.query;
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    res.json(weatherResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
