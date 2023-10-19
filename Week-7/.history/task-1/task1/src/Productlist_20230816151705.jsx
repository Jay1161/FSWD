// import './product.css'

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
//     <div id="products" className="productcard">
//       <img src={product.image} alt={product.name} stlye={{borderRadius: "2rem"}} style={{borderBlockColor: "white" }}  />
//       <h2>{product.name}</h2>
//       <p>RS {product.price}</p>
//       <button>Add to cart</button>
//     </div>
//   );
//   return (
//     <div id="products" className="productcard">
//       {products.map((product) => (
//         <ProductCard product={product} />
//       ))}{" "}
//     </div>
//   );
// }
// export default ProductList;



import React, { useState } from "react";
import './product.css';

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
  const checkedProducts = [];

  function handleClick(productId) {
    if (checkedProducts.includes(productId)) {
      checkedProducts.splice(checkedProducts.indexOf(productId), 1);
    } else {
      checkedProducts.push(productId);
    }
  }

  const ProductCard = ({ product }) => (
    <div id="products" className="productcard">
      <img src={product.image} alt={product.name} stlye={{borderRadius: "2rem"}} style={{borderBlockColor: "white" }}  />
      <h2>{product.name}</h2>
      <p>RS {product.price}</p>
      <button
        disabled={!checkedProducts.includes(product.id)}
        onClick={() => handleClick(product.id)}
      >
        Add to cart
      </button>
    </div>
  );

  return (
    <div id="products" className="productcard">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}{" "}
      <button disabled={!checkedProducts.length}>Checkout</button>
    </div>
  );
}

export default ProductList;