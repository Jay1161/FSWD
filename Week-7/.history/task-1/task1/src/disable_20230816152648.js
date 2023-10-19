import React, { useState } from "react";


export default function App() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    console.log(loading);

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 3000)
    );

    setLoading(false);
    console.log(loading);
  }

  return (
    <div className="App">
      <button type="button" onClick={handleSubmit} disabled={loading}>
        Send
      </button>
    </div>
  );
}