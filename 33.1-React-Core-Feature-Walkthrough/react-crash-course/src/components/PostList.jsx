import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import React, { useState } from "react";
import { useEffect } from "react";

function PostList({ isPosting, onStopPosting }) {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    setPosts(data.posts);
    setIsLoading(false);
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isLoading && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} post={post} />
          ))}
        </ul>
      )}
      {!isLoading && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There Are No Post Yet.</h2>
          <p>Start Adding Something!!</p>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading Posts...</p>
        </div>
      )}
    </>
  );
}

export default PostList;
