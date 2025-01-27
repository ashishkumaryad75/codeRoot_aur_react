import React from "react";
import "./Posts.css";
import PostList from "../components/PostList.jsx";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  if (!response.ok) {
    console.log(
      "Error##########################>",
      new Error('didn"t gat the data')
    );
    return [];
  }
  console.log("data##########################>", data);
  return data.posts || [];
}
