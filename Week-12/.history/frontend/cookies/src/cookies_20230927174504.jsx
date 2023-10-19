import React, { useState, useEffect } from "react"; import Cookies from "js-cookie";
function App() {
const [backgroundColor, setBackgroundColor] = useState("white"); useEffect(() => {
const savedBackgroundColor = Cookies.get("background-color"); if (savedBackgroundColor) {
setBackgroundColor(savedBackgroundColor); }
}, []);
const changeBackgroundColor = (color) => {
setBackgroundColor(color);
Cookies.set("background-color", color, { expires: 7 }); };
return (
<div style={{ backgroundColor }}>
<button onClick={() => changeBackgroundColor("white")}>White</button> <button onClick={() => changeBackgroundColor("lightblue")}>
Light Blue
      </button>
    </div>
); }
export default App;