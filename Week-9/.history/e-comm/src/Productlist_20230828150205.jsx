import React, { useState } from 'react';
import './product.css';

const products = [
  {
      id: 1,
      name: "iPhone 14",
      price: 120000,
      image: "img/iphone14.jpg",
      discount: 10,
      details: 'Latest line-up in Apple',
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 99000,
      image: "img/S23ultra.jpeg",
      discount: 10,
      details: 'Latest line-up in Samsung',
    },
    {
      id: 3,
      name: "Macbook",
      price: 157000,
      image: "img/macbook.jpeg",
      discount: 20,
      details: 'Latest line-up in Apple',
    },
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
            <p>Price: RS.{product.price}</p>
            <p>Discount: {product.discount}%</p>
            <p>{product.details}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            
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
