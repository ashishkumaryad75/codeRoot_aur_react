import React from "react";
import Post from "./components/Post";

function App() {
  return (
    <>
      <main>
        <Post author='Coding' description="Learning the frontend."/>
        <Post author='Root' description="Learning the React App."/>
      </main>
    </>
  );
}

export default App;
