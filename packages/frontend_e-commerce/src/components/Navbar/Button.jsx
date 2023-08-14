function Button(props) {
	return (
		<div
			className="relative inline-block px-3 mx-1 py-1 font-semibold text-gray-700 leading-tight hover:text-gray-900"
			>
			<span className="absolute inset-0 bg-indigo-200 opacity-50 rounded-full"></span>
			<span className="relative">{props.children}</span>
		</div>
	);
}

export default Button;
