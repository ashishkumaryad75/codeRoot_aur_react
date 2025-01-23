import React, { useRef } from "react";

const NewTodo = () => {
  const textRef = useRef("");

  const  submitHandler=(event: React.FormEvent) =>{
    event.preventDefault();

    
  }

  function textHandler() {}
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" />
        <button onClick={textHandler}>Add Todd</button>
      </form>
    </>
  );
};

export default NewTodo;
