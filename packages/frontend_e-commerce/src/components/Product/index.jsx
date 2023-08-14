
function Product({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative pb-2/3">
                <img
                    className="absolute h-full w-full object-cover"
                    src={product.thumbnail}
                    alt={product.title}
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900">{product.title}</h2>
                <p className="text-sm font-medium text-gray-500">{product.brand}</p>
                <p className="text-sm font-medium text-gray-500">{product.category}</p>
                <p className="text-lg font-medium text-gray-900">₹{product.price}</p>
                <p className="text-sm font-medium text-gray-500">{product.description}</p>
                <p className="text-sm font-medium text-gray-500">{product.rating} stars</p>
                <p className="text-sm font-medium text-gray-500">{product.stock} in stock</p>
            </div>
        </div>
    );
}

export default Product;
