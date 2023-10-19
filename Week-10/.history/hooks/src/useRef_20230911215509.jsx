import React, { useRef } from 'react';

function UseRef() {
  // Create a ref using the useRef hook
  const inputRef = useRef(null);

  // Define a function to focus the input element
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div al>
      <h1>Input Focus Example</h1>
      <input ref={inputRef} type="text" placeholder="Type here" />
      <br></br>
      <br></br>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRef;
