import "./App.css";
import React, { useState } from "react";
import Todos from "./components/Todos.tsx";
import Todo from "./models/todo.ts";
import NewTodo from "./components/NewTodo.tsx";

function App() {
  const [todoss, setTodos] = useState();
  const todos = [new Todo("Learn React And"), new Todo("Learn TypeScript")];
const addTodoHandler =(text:string)=>{
  // setTodos();
}

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </>
  );
}

export default App;
