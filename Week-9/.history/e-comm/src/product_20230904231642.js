import React from 'react';

const Product = ({ product, onAddToCart }) => {
  const { id, name, image, price, discount } = product;

  const imagePath = process.env.PUBLIC_URL + '/images/' + image;

  return (
    <div className="product">
      <img src={imagePath} alt={name} />
      <h3>{product.name}</h3>
      <p>Price: rs.{product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>{product.details}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;