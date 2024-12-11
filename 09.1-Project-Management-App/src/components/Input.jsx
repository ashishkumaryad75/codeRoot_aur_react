import React from "react";

function Input({ label, textarea, ...props }) {
  return (
    <>
      <p>
        <label htmlFor="">{label}</label>
      </p>
      {textarea ? <textarea {...props}/> : <input {...props}/>}
    </>
  );
}

export default Input;
