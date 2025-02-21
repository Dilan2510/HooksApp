import { useMemo, useState } from "react";
import { useCounter } from "../Hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("hay vamos..");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memoValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memoValue}</h4>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
