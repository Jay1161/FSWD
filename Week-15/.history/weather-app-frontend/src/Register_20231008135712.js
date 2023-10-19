// src/Register.js

import React from 'react';

const Register = ({ setEmail, setPassword, handleRegister }) => {
  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;