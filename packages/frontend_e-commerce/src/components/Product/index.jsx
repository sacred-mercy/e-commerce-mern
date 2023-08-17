function Product({ product }) {
	return (
		<div className="rounded-lg shadow overflow-hidden">
			<img
				className="p-8 rounded h-48 w-full object-cover object-center"
				src={product.thumbnail}
				alt={product.title}
			/>
			<div className="p-4">
				<h2 className="text-lg font-medium text-gray-900">{product.title}</h2>
				<p className="text-sm font-medium text-gray-500">{product.brand}</p>
				<p className="text-lg font-medium text-gray-900">₹{product.price}</p>
				<p className="text-sm font-medium text-gray-500">
					{product.rating} stars
				</p>
				{/* <div className="flex justify-between px-4 bg-gray-50">
					<button className="text-sm font-medium text-gray-900">View</button>
					<button className="text-sm font-medium text-gray-900">
						Add to cart
					</button>
				</div> */}
			</div>
		</div>
	);
}

export default Product;
