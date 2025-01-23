import classes from "./NewPost.module.css";
import React, { useState } from "react";

function NewPost() {
  const [enteredBody, setEntredBody] = useState("");

  function changeBodyHandler(event) {
    setEntredBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
