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
       <ul>
        {cart.map((product) => (
          <li key={product.id} className="cart-item">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discount}%</p>
          </li>
        ))}
      </ul>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemoveFromCart={onRemoveFromCart}
          onQuantityChange={onQuantityChange}
        />
      ))}
  );
};

export default ShoppingCart;