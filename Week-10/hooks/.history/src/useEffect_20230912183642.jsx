import React, { useState, useEffect } from 'react';

function UseEffect() {
  // Declare a state variable to store a count
  const [count, setCount] = useState(0);

  // Use useEffect to update the document title
  useEffect(() => {
    document.title = `Count: ${count}`;

    // This cleanup function will be called when the component unmounts
    return () => {
      document.title = 'React App'; // Reset the document title
    };
  }, [count]); // Dependency array with 'count' as a dependency

  return (
    <div>
      <h1> Updater</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default UseEffect;
