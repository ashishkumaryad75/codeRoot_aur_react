import React from "react";
import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostList({isPosting,onStopPosting}) {
  const [enteredBody, setEntredBody] = useState("");
  const [enteredAuthor, setEntredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEntredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEntredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredBody} body={enteredAuthor} />
        <Post author="Root" body="Learning the React App." />
      </ul>
    </>
  );
}

export default PostList;
