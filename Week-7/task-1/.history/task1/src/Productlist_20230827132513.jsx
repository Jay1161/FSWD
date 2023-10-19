import React, { useState } from "react";
import "./product.css";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "iPhone 14",
      price: 120000,
      image: "img/iphone14.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 99000,
      image: "img/S23ultra.jpeg",
    },
    {
      id: 3,
      name: "Macbook",
      price: 157000,
      image: "img/macbook.jpeg",
    },
  ];

  const [enabledProducts, setEnabledProducts] = useState([]);

  const toggleProductEnable = (productId) => {
    setEnabledProducts([...enabledProducts, productId]);
  };

  return (
    <div className="productlist">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>RS {product.price}</p>
          <button
            disabled={!enabledProducts.includes(product.id)}
            onClick={() => toggleProductEnable(product.id)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
