import React, { useState } from "react";

export const Button = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((old) => !old);
  };

  return (
    <button onClick={handleClick} title='dummybtn'>
      {clicked ? "You clicked me" : "Click me"}
    </button>
  );
};
