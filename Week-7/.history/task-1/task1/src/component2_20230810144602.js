function Component2() {
  const ProductCard = ({ product }) => (
    <div id="products1" className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>RS {product.price}</p>
      <button>Buy Now</button>
    </div>
  );
  const products = [
    {
      id: 1,
      name: "iPhone 14",
      price: 4500,
      image: "/img/iphone.jpg",
    },
    {
      id: 2,
      name: "Milton Bottle",
      price: 870,
      image: "/img/bottle.jpg",
    },
    {
      id: 3,
      name: "Nikon Camera",
      price: 15700,
      image: "/img/camera.jpg",
    },
  ];
  return (
    <div id="products" className="product-card">
       <h1>Products</h1> {" "}
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
      {" "}
    </div>
  );
}
export default Component2;