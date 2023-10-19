import React from 'react';
import CartItem from './cartitem';

const ShoppingCart = ({ cartItems, onRemoveFromCart, onQuantityChange }) => {
  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce((acc, item) => {
      const discountedPrice = item.price - (item.price * item.discount) / 100;
      return acc + discountedPrice * item.quantity;
    }, 0);
    return subtotal;
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemoveFromCart={onRemoveFromCart}
          onQuantityChange={onQuantityChange}
        />
      ))}
      <div className="subtotal">
        <p>Subtotal: rs.{calculateSubtotal().toFixed(2)}</p>
      </div>
    </div>
    
  );
};

export default ShoppingCart;