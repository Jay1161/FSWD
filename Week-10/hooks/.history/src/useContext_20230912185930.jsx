import React, { useContext } from "react";

const MyContext = React.createContext({
  time: new Date(),
});

const UseContext = () => {
  const time = useContext(MyContext);

  return (
    <div>
      The current time is: {time.toLocaleString()}
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

export default UseContext;
