import React, { useMemo } from 'react';

function UseMemo() {
  const random = useMemo(() => {
    // This function is called only once, when the component mounts.
    return Math.random();
  }, []);

  return (
    <div>
      <h1>The random number is: {memoizedValue}</h1>
    </div>
  );
}

export default UseMemo;
