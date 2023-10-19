import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./home";
import About from "./about";

// class Sap extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// }

// export default Sap;

class Sap extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Sap;
