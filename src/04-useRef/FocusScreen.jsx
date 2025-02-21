import { useRef } from "react";

export const FocusScreen = () => {
  const InputRef = useRef();

  function onClick() {
    InputRef.current.select();
    console.log(InputRef.current);
  }

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={InputRef}
        type="text"
        className="form-control"
        placeholder="Ingrese el nombre"
      />
      <button className="btn btn-primary mt-2" onClick={onClick}>
        Limpiar
      </button>
    </>
  );
};
