import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const param = useParams();

  return (
    <>
      <h1>Product Details Page !</h1>
      <p>{param.productId}</p>
    </>
  );
}

export default ProductDetailsPage;
