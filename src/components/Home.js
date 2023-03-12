import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1>Products:</h1>
      {products.map((product) => (
        <p key={product._id}>
          {product.name} price: ${product.price}
        </p>
      ))}
    </div>
  );
};

export default Home;
