// import "./product.css";
// import React, { useState } from "react";

// function ProductList() {
//   const products = [
//     {
//       id: 1,
//       name: "iPhone 14",
//       price: 120000,
//       image: "img/iphone14.jpg",
//     },
//     {
//       id: 2,
//       name: "Samsung Galaxy S23 Ultra",
//       price: 99000,
//       image: "img/S23ultra.jpeg",
//     },
//     {
//       id: 3,
//       name: "Macbook",
//       price: 157000,
//       image: "img/macbook.jpeg",
//     },
//   ];

//   const ProductCard = ({ product }) => (
//     <div className="productcard">
//       <img
//         src={product.image}
//         alt={product.name}
//         style={{ borderRadius: "2rem" }}
//       />
//       <h2>{product.name}</h2>
//       <p>RS {product.price}</p>
//       <input type="checkbox" id="enable-disable-checkbox" /> 
//       <label for="enable-disable-checkbox">Enable Button</label>
//       <button>Add to cart</button>
//     </div>
//   );

//   return (
//     <div id="products" className="productlist">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

// export default ProductList;



import React, { useState } from 'react';


function ProductList() {
  const products = [
    {
      id: 1,
      name: 'iPhone 14',
      price: 120000,
      image: 'img/iphone14.jpg',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      price: 99000,
      image: 'img/S23ultra.jpeg',
    },
    {
      id: 3,
      name: 'Macbook',
      price: 157000,
      image: 'img/macbook.jpeg',
    },
  ];

  const ProductCard = ({ product }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleEnable = () => {
      setIsEnabled(!isEnabled);
    };

    return (
      <div className="productcard">
        <img src={product.image} alt={product.name} style={{ borderRadius: '2rem' }} />
        <h2>{product.name}</h2>
        <p>RS {product.price}</p>
        <input type="checkbox" checked={isEnabled} onChange={toggleEnable} />
        <label htmlFor={`enable-button-${product.id}`}>
          {isEnabled ? 'Enabled' : 'Disabled'}
        </label>
        <button disabled={!isEnabled}>Add to cart</button>
      </div>
    );
  };

  return (
    <div className="productlist">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
