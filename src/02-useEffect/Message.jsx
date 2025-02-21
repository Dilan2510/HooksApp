import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("Message Mount");
    const MouseMount = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousedown", MouseMount);

    return () => {
      console.log("Message UnMount");
      window.removeEventListener("mousedown", MouseMount);
    };
  }, []);

  return (
    <>
      <h3>Usuario No existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
