import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function UseContext() {
  // Get the current theme from the context.
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h1>The current theme is: {theme}</h1>
    </div>
  );
}

export default Use;
