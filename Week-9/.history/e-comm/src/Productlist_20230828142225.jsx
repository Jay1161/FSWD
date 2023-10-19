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
    if (enabledProducts.includes(productId)) {
      setEnabledProducts(enabledProducts.filter((id) => id !== productId));
    } else {
      setEnabledProducts([...enabledProducts, productId]);
    }
  };

  const ProductCard = ({ product }) => (
    <div className={`productcard ${enabledProducts.includes(product.id) ? "enabled" : "disabled"}`}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>RS {product.price}</p>
      <label>
        <input
          type="checkbox"
          checked={enabledProducts.includes(product.id)}
          onChange={() => toggleProductEnable(product.id)}
        />
        Enable button
      </label>
      <button disabled={!enabledProducts.includes(product.id)}>Add to cart</button>
    </div>
  );

  return (
    <div className="productlist">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;


import React, { useState } from 'react';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'product1.jpg',
    price: 19.99,
    discount: 10,
    details: 'Lorem ipsum dolor sit amet...',
  },
  // Add more products here
];

function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <h1>E-Commerce Website</h1>
      <div className="product-listing">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discount}%</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <p>{product.details}</p>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;

