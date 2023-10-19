import React, { useContext } from "react";

const MyContext = React.createContext(new Date());

const  = () => {
  const time = useContext(MyContext);

  return (
    <div>
      The current time is: <b>{time.toLocaleString()}</b>
    </div>
  );
};

const AppProvider = ({ children }) => {
  return (
    <MyContext.Provider value={new Date()}>
      {children}
    </MyContext.Provider>
  );
};

export default App;

