import React from "react";
import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEntredBody] = useState("");
  const [enteredAuthor, setEntredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEntredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEntredAuthor(event.target.value);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
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
