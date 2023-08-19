import NavLink from "./NavLink";
import Button from "./Button";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Navbar({ user, setSearch, search }) {
	const navigate = useNavigate();

	// use effect for search
	useEffect(() => {
		if (search !== "") {
			navigate(`/search`);
		} else {
			navigate(`/`);
		}
	}, [search]);

	return (
		<>
			<nav className="text-white shadow sticky top-0 z-40 w-full backdrop-blur bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
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
					<div className="items-center flex ">
						<NavLink to="/">Home</NavLink>
						{user ? <NavLink to="/cart">Cart</NavLink> : null}
					</div>
					<div className="items-center flex">
						<div>
							<input
								type="text"
								placeholder="Search"
								name="q"
								value={search}
								onChange={(e) => {
									setSearch(e.target.value);
								}}
								onFocus={() => {
									setSearch("");
								}}
								className="bg-gray-100 h-8 text-gray-950 px-5 pr-10 rounded-full text-sm focus:outline-none w-64"
							/>
						</div>
						{user ? (
							<div className="flex flex-row mx-6">
								<p className="text-gray-900 mx-3">{user.name}</p>
								<Button to="/logout">
									<Link to={`logout`}>Logout</Link>
								</Button>
							</div>
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
