import "./product.css";

function ProductList1() {
  const Product = [
    {
      id: 1,
      name: "iPhone",
      price: 90000,
      image: "img/iphone14.jpg",
    },
    {
      id: 2,
      name: "S23 Ultra",
      price: 90000,
      image: "img/S23ultra.jpeg",
    },
    {
      id: 3,
      name: "MacBook",
      price: 200000,
      image: "img/macbook.jpeg",
    },
  ];

  return (
    <div>
      {" "}
      {Product.map((Product) => (
        <div key={product.id} className="Card">
          {" "}
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "20%" }}
          />
           <h1>{product.name}</h1>{" "}
          <p className="price">R.{product.price}</p>{" "}
          <p>
            <button>Add to Cart</button>
          </p>
          {" "}
        </div>
      ))}
      {" "}
    </div>
  );
}

export default ProductList1;
