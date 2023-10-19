import React, { useState, useEffect } from 'react';

function SimpleEffectExample() {
  // Declare a state variable
  const [count, setCount] = useState(0);

  // Define an effect to update the document title
  useEffect(() => {
    document.title = `Count: ${count}`;

    // Clean-up function
    return () => {
      document.title = 'React App'; // Reset the title when the component unmounts
    };
  }, [count]); // The effect will run whenever the "count" state changes

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Simple Effect Example</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseEffect;
