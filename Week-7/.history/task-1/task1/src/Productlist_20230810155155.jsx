import './product.css'

function ProductList1() {
  const ProductCard = ({ product }) => (
    <div id="products1" className="productcard">
      <img src={product.image} alt={product.name} stlye={{borderRadius: "2rem"}} style={{borderBlockColor: "yellow" }}  />
      <h2>{product.name}</h2>
      <p>RS {product.price}</p>
      <button>Add to cart</button>
    </div>
  );
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
      image: "img/S22ultra.jpeg",
    },
    {
      id: 3,
      name: "Macbook",
      price: 157000,
      image: "img/macbook.jpeg",
    },
  ];
  return (
 <div>
      {Product.map(product => (
        <div key={product.id} className="Card">
          <img src={product.image} alt={product.name} style={{ width: "20%" }} />
          <h1>{product.name}</h1>
          <p className="price">R.{product.price}</p>
          <p>Some text about the {product.name}..</p>
          <p><button>Add to Cart</button></p>
        </div>
      ))}
    </div>
  );
}
export default ProductList1;
