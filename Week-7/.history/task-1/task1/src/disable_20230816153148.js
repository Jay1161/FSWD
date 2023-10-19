import React, { useState } from 'react';

const disableButton = () => {
  const [checked, setChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleCheckboxClick = () => {
    setChecked(!checked);
    setButtonDisabled(!checked);
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <input type="checkbox" id="checkbox" onChange={handleCheckboxClick} />
      <label htmlFor="checkbox">Check me</label>
      <button disabled={buttonDisabled} onClick={handleButtonClick}>
        Submit
      </button>
    </div>
  );
};

export default App;