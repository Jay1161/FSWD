// // client/src/App.js

// import React, { useState, useEffect } from 'react';
// import './App.css';

// function Cookies() {
//   const [backgroundColor, setBackgroundColor] = useState('');

//   useEffect(() => {
//     // Retrieve the backgroundColor cookie when the component mounts
//     const savedBackgroundColor = getCookie('backgroundColor');
//     if (savedBackgroundColor) {
//       setBackgroundColor(savedBackgroundColor);
//     }
//   }, []);

//   // Function to set the backgroundColor cookie on button click
//   const setCookieAndBackgroundColor = (color) => {
//     document.body.style.backgroundColor = color;
//     document.cookie = `backgroundColor=${color}`;
//     setBackgroundColor(color);
//   };

//   // Function to retrieve a cookie by name
//   const getCookie = (name) => {
//     const cookies = document.cookie.split(';');
//     for (const cookie of cookies) {
//       const [cookieName, cookieValue] = cookie.trim().split('=');
//       if (cookieName === name) {
//         return cookieValue;
//       }
//     }
//     return null;
//   };

//   return (
//     <div className="App">
//       <h1>Background Color Changer</h1>
//       <button onClick={() => setCookieAndBackgroundColor('#546E7A')}>Grey</button>
//       <button onClick={() => setCookieAndBackgroundColor('#4DD0E1')}>Aqua</button>
//       <button onClick={() => setCookieAndBackgroundColor('#7E57C2')}>Megenta</button>
//     </div>
//   );
// }

// export default Cookies;


import React, { useState, useEffect } from 'react';
import './App.css';

function Cookies() {
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
      <button onClick={() => handleBackgroundColorChange('Red')}>White</button>
      <button onClick={() => handleBackgroundColorChange('Blue')}>Light Blue</button>
      <button onClick={() => handleBackgroundColorChange('lightred')}>Light Green</button>
    </div>
  );
}

export default Cookies;
