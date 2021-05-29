import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={
        toggle ? "toggle-container toggle-container-active" : "toggle-container"
      }
      onClick={() => setToggle((toggle) => !toggle)}
      title='toggle-container'
    >
      <div className={toggle ? "toggle toggle-on" : "toggle"}></div>
    </div>
  );
};

export default Toggle;
