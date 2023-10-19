import './product.css'

function ProductList1() {
  const ProductCard = ({ product }) => (
    <div id="products1" className="productcard">
      <img src={product.image} alt={product.name} stlye={{borderRadius: "2rem"}} style={{borderBlockColor: "white" }}  />
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
      image: "img/S23ultra.jpeg",
    },
    {
      id: 3,
      name: "Macbook",
      price: 157000,
      image: "img/macbook.jpeg",
    },
  ];
  return (
    
  );
}
export default ProductList1;