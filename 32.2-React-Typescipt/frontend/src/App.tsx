import "./App.css";
import React from "react";
import Todos from "./components/Todos.tsx";
import NewTodo from "./components/NewTodo.tsx";
import TodosContextProvider from "./store/todos-Context.tsx";

function App() {
  // const todos = [new Todo("Learn React And"), new Todo("Learn TypeScript")];

  return (
    <>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </>
  );
}

export default App;
