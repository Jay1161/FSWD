import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import productsData from './data/products.json';

function ecomm() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <div className="App">
      <ProductList products={productsData} onAddToCart={addToCart} />
      <ShoppingCart
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        onQuantityChange={handleQuantityChange}
      />
    </div>
  );
}

export default App;