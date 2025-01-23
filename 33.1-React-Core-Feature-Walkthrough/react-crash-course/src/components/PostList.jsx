import React from "react";
import classes from "./PostList.module.css";
import Post from "./Post";

function PostList() {
  return (
    <>
      <ul className={classes.posts}>
        <Post author="Coding" body="Learning the frontend." />
        <Post author="Root" body="Learning the React App." />
      </ul>
    </>
  );
}

export default PostList;
