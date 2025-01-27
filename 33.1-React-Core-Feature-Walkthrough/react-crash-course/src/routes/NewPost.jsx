import classes from "./NewPost.module.css";
import React from "react";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name" >
            Your name
          </label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>{" "}
    </Modal>
  );
}

export default NewPost;

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body:"..",author:".."}
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    return new Error("Failed To Submit the data.");
  }
  const resData = await response.json();
  console.log(resData);

  return redirect("/");
};
