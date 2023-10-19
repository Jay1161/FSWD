// client/src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [newColor, setNewColor] = useState('');

  useEffect(() => {
    // Fetch the background color from the server
    axios.get('/api/getColor').then((response) => {
      setBackgroundColor(response.data.color);
    });
  }, []);

  const handleColorChange = () => {
    // Send the new background color to the server
    axios.post('/api/setColor', { color: newColor }).then(() => {
      setBackgroundColor(newColor);
    });
  };

  return (
    <div style={{ backgroundColor, minHeight: '100vh', transition: 'background-color 0.5s' }}>
      <h1>Background Color Changer</h1>
      <input
        type="text"
        placeholder="Enter a color"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
      />
      <button onClick={handleColorChange}>Change Background Color</button>
    </div>
  );
}

export default App;
