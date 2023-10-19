import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Sap extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/about">About</Link>
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
  </div>
);

export default Sap;