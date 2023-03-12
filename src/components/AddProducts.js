import React, { useState } from "react";

const AddProducts = () => {
  const [product, setProduct] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Product added");
          event.target.reset();
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onBlur={handleBlur}
          type="text"
          name="name"
          id=""
          placeholder="Product Name"
        />
        <br />
        <input
          onBlur={handleBlur}
          type="text"
          name="price"
          id=""
          placeholder="Price"
        />
        <br />
        <input
          onBlur={handleBlur}
          type="text"
          name="productURL"
          id=""
          placeholder="Product URL"
        />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
