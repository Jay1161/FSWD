import React from 'react';

const Product = ({ product, onAddToCart }) => {
  const { id, name, image, price, discount } = product;

  // Use public URL for images
  const imagePath = process.env.PUBLIC_URL + '/images/' + image;

  return (
    <div className="product">
      <img src={imagePath} alt={name} />
      <h3>{name}</h3>
      <p>Price: RS.{price}</p>
      <p>Discount: {discount}%</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;

"id": 2,
      "name": "Samsung Galaxy S23 Ultra",
      "price": 99000,
      "image": "img/S23ultra.jpeg",
      "discount": 10,
      "details": "Latest line-up in Samsung"