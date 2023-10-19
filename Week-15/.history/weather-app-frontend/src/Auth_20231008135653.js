// src/App.js

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';

// Mock API functions (replace with actual API calls)
const mockRegister = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: 'Registration successful' });
    }, 1000);
  });
};

const mockLogin = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ token: 'mock-token' });
    }, 1000);
  });
};

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleRegister = async () => {
    try {
      await mockRegister(email, password);
      alert('Registration successful');
    } catch (error) {
      alert('Registration failed');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await mockLogin(email, password);
      localStorage.setItem('token', response.token);
      setToken(response.token);
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {token ? (
              <>
                <li>
                  <Link to="/protected">Protected Route</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={token ? <h2>Welcome to the homepage</h2> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin} />} />
          <Route path="/register" element={<Register setEmail={setEmail} setPassword={setPassword} handleRegister={handleRegister} />} />
          <Route path="/protected" element={token ? <h2>Welcome to the protected route</h2> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


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
