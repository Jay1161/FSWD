import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./home";
import About from "./about";

class Sap extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Sap;

const Home = () => {
  return (
    <div>
      <h1>This is the Home page</h1>
      <a href="/about">About</a>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};