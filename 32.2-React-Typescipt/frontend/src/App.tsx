import "./App.css";
import React from "react";
import Todos from "./components/Todos.tsx";
import Todo from "./models/todo.ts";

function App() {
  const todos = [new Todo("Learn React And"), new Todo("Learn TypeScript")];
  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
