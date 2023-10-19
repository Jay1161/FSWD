import React, { useContext,use } from 'react';

const ThemeContext = React.createContext('light');

function UseContext(props) {
  const [theme, setTheme] = useState('light');

  return (
    <Context.Provider value={theme}>
      {props.children}
    </Context.Provider>
  );
}

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      The current theme is: {theme}
    </div>
  );
}

export default UseContext;
