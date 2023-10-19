import React, { useState } from 'react';

const CartItem = ({ item, onRemoveFromCart, onQuantityChange }) => {
  const { id, name, price, discount, quantity } = item;

  const originalPrice = price;
  const discountedPrice = price - (price * discount) / 100;

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    onQuantityChange(id, newQuantity);
  };

  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Original Price: ${originalPrice}</p>
      <p>Discounted Price: ${discountedPrice}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={() => onRemoveFromCart(id)}>Remove</button>
    </div>
  );
};

export default CartItem;