import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    // This effect will run every time the component renders.
    console.log('Effect ran');
  }, []);

  return (
    <div>
      <h1>This is an example of useEffect</h1>
    </div>
  );
}

export default Example;
