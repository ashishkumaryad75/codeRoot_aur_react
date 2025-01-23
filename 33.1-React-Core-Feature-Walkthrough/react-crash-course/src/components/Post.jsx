import React from "react";

function Post(props) {
 
  return (
    <>
      <h2>{props.author}</h2>
      <h2>{props.description}</h2>
    </>
  );
}

export default Post;
