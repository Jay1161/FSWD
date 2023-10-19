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

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };

    return (
      <div className="productcard">
        <img
          src={product.image}
          alt={product.name}
          style={{ borderRadius: "2rem" }}
        />
        <h2>{product.name}</h2>
        <p>RS {product.price}</p>
        <div className="quantity-section">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button>Add to cart</button>
      </div>
    );
  };

  return (
    <div id="products" className="productlist">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
