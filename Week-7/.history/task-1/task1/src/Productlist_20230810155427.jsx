import "./product.css";

function MyProduct() {
  const Product = [
    {
      id: 1,
      name: "Tea",
      price: 20,
      image: "images/tea.png",
    },
    {
      id: 2,
      name: "Coffee",
      price: 30,
      image: "images/coffee.jpg",
    },
    {
      id: 3,
      name: "Pizza",
      price: 200,
      image: "images/pizza.jpg",
    },
  ];

  return (
    <div>
           {" "}
      {Product.map((product) => (
        <div key={product.id} className="Card">
                   {" "}
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "20%" }}
          />
                    <h1>{product.name}</h1>         {" "}
          <p className="price">R.{product.price}</p>         {" "}
          <p>Some text about the {product.name}..</p>         {" "}
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

export default MyProduct;
