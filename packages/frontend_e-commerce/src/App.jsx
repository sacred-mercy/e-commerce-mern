import { useState, useEffect } from "react";
import Product from "./components/Product";
import Pagination from "./components/Pagination";
import URLConfig from "./config/url";

function App() {
	const [products, setProducts] = useState(null);
	const [productCount, setProductCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		async function fetchProducts() {
			// setProducts(null);
			const response = await fetch(URLConfig("/products"), {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					page: currentPage,
				},
			});
			const json = await response.json();
			setProducts(json.products);
			setProductCount(json.count);
		}

		fetchProducts();
	}, [currentPage]);

	return (
		<>
			{products === null ? (
				<div className="flex items-center justify-center h-screen">
					<div className="flex flex-col items-center justify-center">
						<svg
							className="animate-spin -ml-1 mr-3 h-20 w-20 text-gray-800"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24">
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
						</svg>
						<h2 className="text-3xl font-bold mt-8 text-gray-800">
							Loading...
						</h2>
					</div>
				</div>
			) : (
				<>
					{productCount === 0 ? (
						<div className="flex items-center justify-center h-screen">
							<div className="bg-white p-16 rounded shadow-2xl w-2/3">
								<h2 className="text-3xl font-bold mb-10 text-gray-800">
									No products found
								</h2>
							</div>
						</div>
					) : (
						<>
							<div className="grid grid-cols-1 mt-4 mb-10 p-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
								{products.map((product) => (
									<Product product={product} key={product.id} />
								))}
							</div>
						</>
					)}
				</>
			)}
			{productCount > 0 ? (
				<div className="fixed bottom-0 w-full">
					<Pagination
						totalCount={productCount}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
						perPage={10}
					/>
				</div>
			) : null}
		</>
	);
}

export default App;
