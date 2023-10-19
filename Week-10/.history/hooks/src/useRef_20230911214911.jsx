import React, { useRef } from 'react';

function Use() {
  // Create a ref to hold the input element.
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => {
        console.log(inputRef.current.value);
      }}>Get Input Value</button>
    </div>
  );
}

export default Example;
