import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`/api/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" placeholder="Enter a city" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && (
        <div>
          <h2>Weather in {weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
