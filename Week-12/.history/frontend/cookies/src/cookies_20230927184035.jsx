// client/src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    // Retrieve the backgroundColor cookie when the component mounts
    const savedBackgroundColor = getCookie('backgroundColor');
    if (savedBackgroundColor) {
      setBackgroundColor(savedBackgroundColor);
    }
  }, []);

  // Function to set the backgroundColor cookie on button click
  const setCookieAndBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
    document.cookie = `backgroundColor=${color}`;
    setBackgroundColor(color);
  };

  // Function to retrieve a cookie by name
  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  return (
    <div className="App">
      <h1>Background Color Changer</h1>
      <button onClick={() => setCookieAndBackgroundColor('lightblue')}>Light Blue</button>
      <button onClick={() => setCookieAndBackgroundColor('lightgreen')}>Light Green</button>
      <button onClick={() => setCookieAndBackgroundColor('lightpink')}>Light Pink</button>
    </div>
  );
}

export default App;