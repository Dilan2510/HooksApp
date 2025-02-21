import { useState } from "react";
import { useLayoutEffect, useRef } from "react";

/* eslint-disable react/prop-types */
const CardCustomHook = ({ name, id, sprites = [] }) => {
  const [BoxPre, setBoxPre] = useState({ width: 0, height: 0 });
  const h2Ref = useRef();
  useLayoutEffect(() => {
    const { height, width } = h2Ref.current.getBoundingClientRect();
    setBoxPre({ height, width });
  }, [name]);

  return (
    <>
      <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
        <h2 ref={h2Ref} className="text-capitalize">
          {id}-{name}
        </h2>
        <div>
          {sprites.map((res) => (
            <img key={res} src={res} />
          ))}
        </div>
        <pre>{JSON.stringify(BoxPre)}</pre>
      </section>
    </>
  );
};

export default CardCustomHook;
