function Button(props) {
	let css = props.cssClass || "bg-gray-200 text-gray-600 ";
	if (props.disabled) {
		css += " cursor-not-allowed"; 
	} else {
        css += " hover:bg-gray-300 cursor-pointer";
    }
	return (
		<button
			onClick={props.onClick}
			className={"select-none px-3 py-2 mx-1 rounded-md " + css}
			disabled={props.disabled}>
			{props.children}
		</button>
	);
}

export default Button;
