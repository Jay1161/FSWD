import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const BackgroundColorPicker = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['backgroundColor']);
  const [backgroundColor, setBackgroundColor] = useState(cookies.backgroundColor || 'white');

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
    setCookie('backgroundColor', event.target.value, { expires: 365 });
  };

  return (
    <div>
      <h2>Background Color Picker</h2>
      <input type="color" value={backgroundColor} onChange={handleBackgroundColorChange} />
    </div>
  );
};

export default BackgroundColorPicker;
