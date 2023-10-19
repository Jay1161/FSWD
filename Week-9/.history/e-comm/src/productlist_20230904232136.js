import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Product from './product';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          {/* Use Link to navigate to the product detail page */}
          <Product product={product} onAddToCart={onAddToCart} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
