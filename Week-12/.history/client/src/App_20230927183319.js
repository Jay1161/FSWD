import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    fetch('/getBackgroundColor')
      .then((res) => res.json())
      .then((data) => {
        setBackgroundColor(data.backgroundColor);
      });
  }, []);

  const handleBackgroundColorChange = (color) => {
    fetch('/setBackgroundColor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ backgroundColor: color }),
    }).then(() => {
      setBackgroundColor(color);
    });
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Background Color Changer</h1>
      <button onClick={() => handleBackgroundColorChange('white')}>White</button>
      <button onClick={() => handleBackgroundColorChange('lightblue')}>Light Blue</button>
      <button onClick={() => handleBackgroundColorChange('lightgreen')}>Light Green</button>
    </div>
  );
}

export default App;
