// src/Login.js

import React from 'react';

const Login = ({ setEmail, setPassword, handleLogin }) => {
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;