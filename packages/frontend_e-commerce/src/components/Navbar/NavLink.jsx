import { Link } from 'react-router-dom';
function NavLink(props) {

	const { children } = props;

	return (
		<Link
			className="my-1  font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
			to={props.to}>
			{children}
		</Link>
	);
}

export default NavLink;
