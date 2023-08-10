import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
    // FETCH THE PRODUCTS FROM THE API
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch("http://localhost:4000/products");
      const json = await response.json();
      setProducts(json.products);
  }

	// PARSE THE PRODUCTS FROM THE JSON FILE
	return (
		<>
      <Navbar />
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </>
	);
}


export default App;
