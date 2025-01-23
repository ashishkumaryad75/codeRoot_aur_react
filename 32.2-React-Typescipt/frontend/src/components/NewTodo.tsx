import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-Context.tsx";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current?.value  || '';

    if (enteredText?.trim().length === 0) {
      // throw Error
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  function textHandler() {}

  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <br />
        <input type="text" id="text" ref={todoTextInputRef} />
        <br />
        <button onClick={textHandler}>Add Todo</button>
      </form>
    </>
  );
};

export default NewTodo;
