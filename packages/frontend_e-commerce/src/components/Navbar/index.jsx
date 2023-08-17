import NavLink from "./NavLink";
import Button from "./Button";
import { Outlet, Link } from "react-router-dom";

function Navbar({ user }) {
	return (
		<>
			<nav className="bg-white text-white shadow dark:bg-gray-800">
				<div className="container py-2 mx-auto flex justify-between items-center">
					<div className="flex items-center justify-between">
						<div>
							<Link
								to="/"
								className="text-xl font-bold text-gray-800 dark:text-white lg:text-2xl hover:text-gray-700 dark:hover:text-gray-300">
								E-Commerce
							</Link>
						</div>
					</div>
					<div className="items-center flex">
						<div id="searchBar" className="relative">
							<input
								type="text"
								placeholder="Search"
								className="bg-gray-100 h-8 text-gray-950 px-5 pr-10 rounded-full text-sm focus:outline-none w-64"
							/>
							<button
								type="submit"
								className="absolute right-0 top-0 mt-3 mr-4">
							</button>
						</div>
						{user ? (
							<>
								<div className="flex flex-row mx-6">
									<NavLink to="/cart">Cart</NavLink>
								</div>
								<div className="flex flex-row mx-6">
									<p className="text-gray-900 mx-3">{user.name}</p>
									<Button to="/logout">
										<Link to={`logout`}>Logout</Link>
									</Button>
								</div>
							</>
						) : (
							<div className="flex justify-center">
								<Button>
									<Link to={`signup`}>Sign Up</Link>
								</Button>
								<Button>
									<Link to={`login`}>Login</Link>
								</Button>
							</div>
						)}
					</div>
				</div>
			</nav>
			<div id="details">
				<Outlet />
			</div>
		</>
	);
}

export default Navbar;
