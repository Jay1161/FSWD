import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={process.env.PUBLIC_URL + '/images/' + product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: rs.{product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>{product.details}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
