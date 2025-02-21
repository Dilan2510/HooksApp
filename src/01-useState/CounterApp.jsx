import { useState } from "react";

const CounterApp = () => {
  const [person, setPerson] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const changeAge = () => {
    setPerson({ ...person, counter1: person.counter1 + 1 });
  };
  return (
    <>
      <h1>Counter1 : {person.counter1}</h1>
      <h1>Counter2 : {person.counter2}</h1>
      <h1>Counter3 : {person.counter3}</h1>
      <hr />
      <button className="btn btn-primary" onClick={changeAge}>
        +1
      </button>
    </>
  );
};

export default CounterApp;
