import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h2>My Home Page</h2>
      <p>
        Go to <Link to="/products">The list of the product.</Link>
      </p>
    </>
  );
}

export default HomePage;
