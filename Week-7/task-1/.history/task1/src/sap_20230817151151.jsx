import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import './sap.css';

function Sap() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default Sap;
