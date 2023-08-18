import { Link } from 'react-router-dom';

function Product({ product }) {
    return (
        <Link to={`/product/${product.id}`} className="rounded-lg shadow overflow-hidden cursor-pointer">
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
            </div>
        </Link>
    );
}

export default Product;
