import React from "react";
import Post from "./components/Post";

function App() {
  return (
    <>
      <div className="">
        <Post author='Coding' body="Learning the frontend."/>
        <Post author='Root' body="Learning the React App."/>
      </div>
    </>
  );
}

export default App;
