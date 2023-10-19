import './product.css'

function ProductList1() {
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
      price: 120000,
      image: "./public/img/iphone14.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 99000,
      image: "./public/img/S23ultra.jpeg",
    },
    {
      id: 3,
      name: "Macbook",
      price: 157000,
      image: "./public/img/macbook.jpeg",
    },
  ];
  return (
    <div id="products" className="product-card">
      <h1>Products</h1>{" "}
      {products.map((product) => (
        <ProductCard product={product} />
      ))}{" "}
    </div>
  );
}
export default ProductList1;
