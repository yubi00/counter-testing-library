import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState(1);

  return (
    <div className='counter'>
      <h1
        data-testid='counter'
        className={
          count > 100
            ? "counter-val over-hundred"
            : count < -100
            ? "counter-val under-hundred"
            : "counter-val normal"
        }
      >
        {count}
      </h1>
      <div>
        <button
          data-testid='increment'
          className='counter-btn'
          onClick={() => setCount((count) => count + inputVal)}
        >
          +
        </button>
        <button
          data-testid='decrement'
          className='counter-btn'
          onClick={() => setCount((count) => count - inputVal)}
        >
          -
        </button>
      </div>
      <input
        type='number'
        data-testid='input'
        className='input-val'
        value={inputVal}
        onChange={(e) => setInputVal(parseInt(e.target.value, 10))}
      />
    </div>
  );
};
