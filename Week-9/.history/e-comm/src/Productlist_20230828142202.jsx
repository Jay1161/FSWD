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

function App() {
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

export default App;
