import classes from "./PostList.module.css";
import Post from "./Post";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

function PostList() {
  const posts = useLoaderData();

  console.log("posts*******************>", posts);
 

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts((existingPost) => [postData, ...existingPost]);
  }
  const safePosts = Array.isArray(posts) ? posts : [];
  console.log("safePosts*******************>", safePosts);

  return (
    <>
      {safePosts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} post={post} />
          ))}
        </ul>
      )}
      {safePosts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There Are No Post Yet.</h2>
          <p>Start Adding Something!!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
