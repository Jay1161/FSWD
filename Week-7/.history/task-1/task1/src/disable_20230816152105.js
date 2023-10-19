import React, { useState } from "react";

const disableButton = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const buttonDisabled = !checked;

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleClick} />
      <button disabled={buttonDisabled}>Submit</button>
    </div>
  );
};

export default disableButton;