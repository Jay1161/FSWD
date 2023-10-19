const ThemeContext = React.createContext('light');

function ThemeProvider(props) {
  const [theme, setTheme] = useState('light');

  return (
    <Context.Provider value={theme}>
      {props.children}
    </Context.Provider>
  );
}

function useContext() {
  // Get the current theme from the context.
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h1>The current theme is: {theme}</h1>
    </div>
  );
}

export default ThemeProvider;
