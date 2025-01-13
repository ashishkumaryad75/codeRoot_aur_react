import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  const param = useParams();

  return (
    <>
      <h1>Product Details Page !</h1>
      <p>{param.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailsPage;
