import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";

class Sap extends Component {
  render() {
    return (
        <>
        <div>
            <a href="/home">Home</a> |
            <a href="/about">Abour</a>
        </div>
            <BrowserRouter>
                <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
      
    );
  }
}

export default Sap;
