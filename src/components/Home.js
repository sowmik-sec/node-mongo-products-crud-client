import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  const handleDelete = (product) => {
    const confirm = window.confirm("Do you want to delete this product item?");
    if (confirm) {
      fetch(`http://localhost:5000/products/${product._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            alert("product deleted from database");
            const remainingProduct = products.filter(
              (pd) => pd._id !== product._id
            );
            setProducts(remainingProduct);
          }
        });
    }
  };

  return (
    <div>
      <h1>Products:</h1>
      {products.map((product) => (
        <p key={product._id}>
          {product.name} price: ${product.price}{" "}
          <button onClick={() => handleDelete(product)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Home;
