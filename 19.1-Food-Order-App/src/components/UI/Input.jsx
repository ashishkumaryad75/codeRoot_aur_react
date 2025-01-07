import React from "react";

function Input({ lable, id, ...props }) {
  return (
    <>
      <p className="control">
        <label htmlFor={id}>{lable}</label>
        <input id={id} name={id} {...props} required />
      </p>
    </>
  );
}

export default Input;
