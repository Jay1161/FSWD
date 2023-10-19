// client/src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function Cookies() {
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
      <button onClick={() => setCookieAndBackgroundColor('Red')}>Red</button>
      <button onClick={() => setCookieAndBackgroundColor('BLue')}></button>
      <button onClick={() => setCookieAndBackgroundColor('Black')}>Light Pink</button>
    </div>
  );
}

export default Cookies;
