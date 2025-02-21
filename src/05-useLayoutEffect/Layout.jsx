/* eslint-disable no-unused-vars */
import { useFetch } from "../Hooks/useFetch";
import { useCounter } from "../Hooks/useCounter";
import LoadingMessage from "../03-exmaples/LoadingMessage";
import CardCustomHook from "../03-exmaples/CardCustomHook";

const Layout = () => {
  const { desIncrement, increment, reset, counter } = useCounter(1);
  const { data, isLoading, messageError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <CardCustomHook
          name={data.name}
          id={data.id}
          sprites={[
            data.sprites.back_default,
            data.sprites.back_shiny,
            data.sprites.front_default,
            data.sprites.front_shiny,
          ]}
        />
      )}
      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? desIncrement(1) : null)}
      >
        Anterior
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment(1)}>
        Siguiente
      </button>
    </>
  );
};

export default Layout;
