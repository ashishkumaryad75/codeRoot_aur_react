import React from "react";

function Sections({ title, children,id }) {
  return (
    <secion id={id}>
      <h2>{title}</h2>
      {children}
    </secion>
  );
}

export default Sections;
