import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedProduct = useLoaderData();
  const [product, setProduct] = useState(loadedProduct);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/products/${loadedProduct._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Product Updated");
        }
      });
  };
  const handleBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newProduct = { ...product };
    newProduct[field] = value;
    setProduct(newProduct);
  };
  console.log(product);
  return (
    <div>
      <h1>Update {product.name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onBlur={handleBlur}
          defaultValue={product.name}
          type="text"
          name="name"
          id=""
          placeholder="Product Name"
        />
        <br />
        <input
          onBlur={handleBlur}
          defaultValue={product.price}
          type="text"
          name="price"
          id=""
          placeholder="Price"
        />
        <br />
        <input
          onBlur={handleBlur}
          defaultValue={product.productURL}
          type="text"
          name="productURL"
          id=""
          placeholder="Product URL"
        />
        <br />
        <button type="submit">update Product</button>
      </form>
    </div>
  );
};

export default Update;
