import classes from "./PostList.module.css";
import Post from "./Post";
import React from "react";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              body={post.body}
              author={post.author}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There Are No Post Yet.</h2>
          <p>Start Adding Something!!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
