import React from 'react';
import './app1.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './productlist';
import ShoppingCart from './shoppingcart';
import ProductDetail from './ProductDetail'; // Import the ProductDetail component
import productsData from './product.json';

function Ecomm() {
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
      <h1>Ecomm Website</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductList products={productsData} onAddToCart={addToCart} />
          </Route>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
      <ShoppingCart
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        onQuantityChange={handleQuantityChange}
      />
    </div>
  );
}

export default Ecomm;