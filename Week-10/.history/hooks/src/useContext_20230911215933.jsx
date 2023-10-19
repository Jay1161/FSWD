import React, { createContext, useContext, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a custom hook to access the context
export function useUserContext() {
  return useContext(UserContext);
}

function Use() {
  // Define a state variable within the context provider
  const [user, setUser] = useState(null);

  return (
    // Provide the context at the top level of the component tree
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>App</h1>
        <LoginForm />
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;

