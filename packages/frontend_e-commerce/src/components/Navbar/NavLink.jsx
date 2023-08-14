function NavLink(props) {

	const { children } = props;

	return (
		<a
			className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
			href={props.to}>
			{children}
		</a>
	);
}

export default NavLink;
