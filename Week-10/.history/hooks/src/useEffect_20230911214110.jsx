import React, { useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run every time the count state variable changes.
    console.log('The count is:', count);
  }, [count]);

  return (
    <div>
      <h1>The current count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Example;
