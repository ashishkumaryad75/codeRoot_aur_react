import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string | undefined) => void }> = (
  props
) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      // throw Error
      return;
    }
    props.onAddTodo(enteredText);
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
