import { useState } from "react";

export const useCounter = (InitialValue = 10) => {
  const [counter, setCounter] = useState(InitialValue);

  const increment = (value) => {
    setCounter(counter + value);
  };
  const desIncrement = (value) => {
    if (counter === 0) return;
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(InitialValue);
  };

  return {
    counter,
    increment,
    desIncrement,
    reset,
  };
};
