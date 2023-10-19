import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    // This effect will run when the component mounts and when any of the props change.
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };

    const deps = [count];

    return () => {
      // This cleanup function will be called when the component is unmounted.
      console.log('Count:', count);
    };
  }, [count]);

  return (
    <div>
      <h1>This is another example of useEffect</h1>
      <button onClick={incrementCount}>Increment</button>
      <p>The current count is: {count}</p>
    </div>
  );
}

export default Example;
