import './product.css'

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
    <div id="products" className="productcard">
      <img src={product.image} alt={product.name} stlye={{borderRadius: "2rem"}} style={{borderBlockColor: "white" }}  />
      <h2>{product.name}</h2>
      <p>RS {product.price}</p>
      <button>Add to cart</button>
      <input type="checkbox" id="checkbox" onChange={handleCheckboxClick} />
      <label htmlFor="checkbox">Check me</label>
      <button disabled={buttonDisabled} onClick={handleButtonClick}>
        Submit
      </button>
    </div>
  );

  return (
    <div id="products" className="productcard">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}{" "}
    </div>
  );
}
export default ProductList;