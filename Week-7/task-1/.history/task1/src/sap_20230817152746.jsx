import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class Sap extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
<a href="/home">Home</a>| 
<a href="/about">About</a>
const Home = () => {
  return <h1>Home</h1>;
};

const About = () => {
  return <h1>About</h1>;
};

export default Sap;
