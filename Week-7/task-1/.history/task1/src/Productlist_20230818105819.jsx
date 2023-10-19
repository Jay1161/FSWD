// import './product.css'
// import React, { useState } from 'react';

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

//   const ProductCard = ({ product }) => {
//     const [checkboxChecked, setCheckboxChecked] = useState(false);

//     return (
//       <div className="productcard">
//         <img src={product.image} alt={product.name} style={{ borderRadius: "2rem", borderBlockColor: "orange" }} />
//         <h2>{product.name}</h2>
//         <p>RS {product.price}</p>
//         <label>
//           <input type="checkbox" checked={checkboxChecked} onChange={() => setCheckboxChecked(!checkboxChecked)} />
//           Enable Add to Cart
//         </label>
//         <button >Add to cart</button>
//       </div>
//     );
//   };

//   return (
//     <div id="products">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

// export default ProductList;

// import "./product.css";
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


import "./product.css";

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
      <img
        src={product.image}
        alt={product.name}
        style={{ borderRadius: "2rem" }}
      />
      <h2>{product.name}</h2>
      <p>RS {product.price}</p>
      <input type="checkbox" id="enable-disable-checkbox" />
      <label for="enable-disable-checkbox">Enable </label>
      <button>Add to cart</button>
    </div>
  );

  return (
    <div id="products" className="productlist">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
