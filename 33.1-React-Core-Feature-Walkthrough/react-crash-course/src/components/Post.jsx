import React from "react";

function Post() {
  const context = Math.random() > 5 ? "Coding" : "Root";
  const description =
    Math.random() > 5 ? "Learning the frontend" : "Learning React";
  return (
    <>
      <h2>{context}</h2>
      <h2>{description}</h2>
    </>
  );
}

export default Post;
