import { useCallback, useState } from "react";
import { Hijo } from "./Hijo";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementFather = useCallback((num) => {
    setValor((res) => res + num);
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} increment={incrementFather} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
