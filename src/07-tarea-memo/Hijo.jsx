/* eslint-disable react/prop-types */

import React from "react";

// eslint-disable-next-line react/display-name
export const Hijo = React.memo(({ numero, increment }) => {
  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(numero)}>
      {numero}
    </button>
  );
});
