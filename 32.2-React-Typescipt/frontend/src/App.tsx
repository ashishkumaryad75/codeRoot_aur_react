import "./App.css";
import React from "react";
import Todos from "./components/Todos.tsx";

function App() {
  const todos: string[] = ["Learn React App", "Learn TypeScript App"];
  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
