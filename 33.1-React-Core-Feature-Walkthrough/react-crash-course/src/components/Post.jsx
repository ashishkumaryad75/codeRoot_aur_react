import React from "react";
import classes from "./Post.module.css";

function Post(props) {
  return (
    <>
      <li className={classes.post}>
        <p className={classes.author}>{props.post.author}</p>
        <p className={classes.text}>{props.post.body}</p>
      </li>
    </>
  );
}

export default Post;

