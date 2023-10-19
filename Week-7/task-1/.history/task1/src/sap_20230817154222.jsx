import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./sap.css";
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
