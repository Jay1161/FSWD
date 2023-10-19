import React, { useState, useEffect } from 'react';
import cookieParser from 'cookie-parser';
import axios from 'axios';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    const backgroundColorCookie = cookieParser.get('backgroundColor');
    if (backgroundColorCookie) {
      setBackgroundColor(backgroundColorCookie);
    }
  }, []);

  const handleBackgroundColorChange = (event) => {
    const newBackgroundColor = event.target.value;
    setBackgroundColor(newBackgroundColor);
    document.cookie = `backgroundColor=${newBackgroundColor}; max-age=600;`;

    axios.post('http://localhost:3000/update-background-color', {
      backgroundColor: newBackgroundColor,
    });
  };

  return (
    <div style={{ backgroundColor }}>
      <h1>My React App</h1>
      <input
        type="color"
        value={backgroundColor}
        onChange={handleBackgroundColorChange}
      />
    </div>
  );
};

export default App;
