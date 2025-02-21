import { useCounter } from "../Hooks/useCounter";

const CounterWithCustomHooks = () => {
  const { counter, increment, desIncrement, reset } = useCounter();

  return (
    <>
      <h1>CounterWithCustomHooks: {counter} </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-info" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-danger" onClick={() => desIncrement(2)}>
        -1
      </button>
    </>
  );
};

export default CounterWithCustomHooks;
