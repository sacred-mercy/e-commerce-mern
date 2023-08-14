function Button(props){
    let color = "bg-" + props.color;
    let textColor = "text-" + props.textColor;
    let buttonStyle = "block w-full  py-2 px-4 rounded " + color + " " + textColor;
    const {type} = props;
    return (
			<button className={buttonStyle} onClick={props.onClick} type={type}>
				{props.children}
			</button>
		);
}

export default Button;