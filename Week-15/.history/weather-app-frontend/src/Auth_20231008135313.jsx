import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleRegister = async () => {
    try {
      await axios.post(`${API_URL}/register`, { email, password });
      alert('Registration successful');
    } catch (error) {
      alert('Registration failed');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
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
        <Switch>
          <Route path="/" exact>
            {token ? (
              <h2>Welcome to the homepage</h2>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/login">
            <h2>Login</h2>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
          </Route>
          <Route path="/register">
            <h2>Register</h2>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
          </Route>
          <Route path="/protected">
            {token ? (
              <h2>Welcome to the protected route</h2>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
