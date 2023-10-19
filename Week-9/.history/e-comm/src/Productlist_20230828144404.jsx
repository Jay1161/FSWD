// import React, { useState } from 'react';
// import './product.css';

// const products = [
//   {
//       id: 1,
//       name: "iPhone 14",
//       price: 120000,
//       image: "img/iphone14.jpg",
//       discount: 10,
//       details: 'Latest line-up in Apple',
//     },
//     {
//       id: 2,
//       name: "Samsung Galaxy S23 Ultra",
//       price: 99000,
//       image: "img/S23ultra.jpeg",
//       discount: 10,
//       details: 'Latest line-up in Samsung',
//     },
//     {
//       id: 3,
//       name: "Macbook",
//       price: 157000,
//       image: "img/macbook.jpeg",
//       discount: 20,
//       details: 'Latest line-up in Apple',
//     },
// ];

// function ProductList() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className="App">
//       <h1>E-Commerce Website</h1>
//       <div className="product-listing">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>Price: RS.{product.price}</p>
//             <p>Discount: {product.discount}%</p>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//             <p>{product.details}</p>
//           </div>
//         ))}
//       </div>
//       {/* <div className="cart">
//         <h2>Shopping Cart</h2>
//         <ul>
//           {cart.map((product) => (
//             <li key={product.id}>{product.name}</li>
//           ))}
//         </ul>
//       </div> */}
//     </div>
//   );
// }

// export default ProductList;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './product.css';

// const products = [
//   {
//       id: 1,
//       name: "iPhone 14",
//       price: 120000,
//       image: "img/iphone14.jpg",
//       discount: 10,
//       details: 'Latest line-up in Apple',
//     },
//     {
//       id: 2,
//       name: "Samsung Galaxy S23 Ultra",
//       price: 99000,
//       image: "img/S23ultra.jpeg",
//       discount: 10,
//       details: 'Latest line-up in Samsung',
//     },
//     {
//       id: 3,
//       name: "Macbook",
//       price: 157000,
//       image: "img/macbook.jpeg",
//       discount: 20,
//       details: 'Latest line-up in Apple',
//     },
// ];

// function Product({ product, addToCart }) {
//   return (
//     <div className="product">
//       <img src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price}</p>
//       <p>Discount: {product.discount}%</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//       <p>{product.details}</p>
//     </div>
//   );
// }

// function Cart({ cart }) {
//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function ProductList() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <h1>E-Commerce Website</h1>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/cart">Cart</Link>
//         </nav>
//         <Route
//           exact
//           path="/"
//           render={() => (
//             <div className="product-listing">
//               {products.map((product) => (
//                 <Product key={product.id} product={product} addToCart={addToCart} />
//               ))}
//             </div>
//           )}
//         />
//         <Route
//           path="/cart"
//           render={() => <Cart cart={cart} />}
//         />
//       </div>
//     </Router>
//   );
// }

// export default ProductList;


