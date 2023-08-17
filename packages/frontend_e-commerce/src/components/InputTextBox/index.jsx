function InputTextBox(props) {
    const {id, label, type, placeholder, name, value, onChange} = props;
	return (
		<>
			<label
				className="block mb-2 text-sm font-medium text-gray-600"
				htmlFor={id}>
				{label}
			</label>
			<input
				className="border border-gray-300 rounded p-2 w-full"
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</>
	);
}

export default InputTextBox;
