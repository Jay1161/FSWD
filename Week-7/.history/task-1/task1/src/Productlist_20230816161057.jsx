import React, { useState } from 'react';


function ProductList() {
  const products = [
    {
      id: 1,
      name: "iPhone 14",
      price: 120000,
      image: "img/iphone14.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 99000,
      image: "img/S23ultra.jpeg",
    },
    {
      id: 3,
      name: "Macbook",
      price: 157000,
      image: "img/macbook.jpeg",
    },
  ];

  const ProductCard = ({ product }) => (
    <div className="productcard">
      <img src={product.image} alt={product.name} style={{ borderRadius: "2rem", borderBlockColor: "white" }} />
      <h2>{product.name}</h2>
      <p>RS {product.price}</p>
      <button disabled={!checkboxChecked}>Add to cart</button>
    </div>
  );

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <div>
      <label>
        <input type="checkbox" checked={checkboxChecked} onChange={() => setCheckboxChecked(!checkboxChecked)} />
        Enable Add to Cart
      </label>
      <div className="productcard">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
