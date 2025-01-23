import React, { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      // throw Error
      return;
    }
  };

  function textHandler() {}

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button onClick={textHandler}>Add Todd</button>
      </form>
    </>
  );
};

export default NewTodo;
