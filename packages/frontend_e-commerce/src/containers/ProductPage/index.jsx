import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import URLConfig from "./../../config/url";

export default function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [image, setImage] = useState(null);

	// fetch product details from backend
	useEffect(() => {
		async function fetchProduct() {
			const product = await fetch(URLConfig("/products/" + id), {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const json = await product.json();
			setProduct(json);
			setImage(json.thumbnail);
		}
		fetchProduct();
	}, [id]);

	const handleImageClick = (image) => {
		setImage(image);
	};

	return (
		<>
			{product === null ? (
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
						<p className="text-gray-800">Loading...</p>
					</div>
				</div>
			) : (
				<div className="flex flex-row">
					<div className="flex flex-col items-center justify-center w-1/2">
						<div className="w-96 h-96">
							<img
								className="p-8 rounded object-fill"
								src={image}
								alt={product.title}
							/>
						</div>
						<div className="flex">
							<img
								className="p-2 rounded h-48 w-full object-cover object-center cursor-pointer"
								style={{ maxHeight: "100px", maxWidth: "100px" }}
								src={product.thumbnail}
								alt={product.title}
								onClick={() => handleImageClick(product.thumbnail)}
							/>
							{product.images.map((img, index) => (
								<img
									key={index}
									className="p-2 rounded h-48 w-full object-cover object-center cursor-pointer"
									style={{ maxHeight: "100px", maxWidth: "100px" }}
									src={img}
									alt={product.title}
									onClick={() => handleImageClick(img)}
								/>
							))}
						</div>
					</div>
					<div className="flex flex-col  w-1/2">
						<div className="p-4">
							<h2 className="text-xl font-medium text-gray-900">
								{product.title}
							</h2>
							<p className="text-sm font-medium text-gray-500">
								{product.brand}
							</p>
							<p className="text-lg font-medium text-gray-900">
								₹{product.price}
							</p>
							<p className="text-sm font-medium text-gray-500">
								{product.rating} stars
							</p>
						</div>
						<div className="p-4">
							<p className="text-sm font-medium text-gray-500">
								{product.description}
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
