import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./containers/Login/index.jsx";
import Logout from "./containers/Logout/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import NotFoundPage from "./containers/NotFoundPage/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

function Root() {
	// user state default to get from local storage
	const [user, setUser] = useState(
		localStorage.getItem("user") !== null
			? JSON.parse(localStorage.getItem("user"))
			: null
	);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Navbar user={user} />,
			errorElement: <NotFoundPage />,
			children: [
				{
					path: "/",
					element: <App />,
				},
				{
					path: "/login",
					element: <Login setUser={setUser} />,
				},
				{
					path: "/logout",
					element: <Logout setUser={setUser} />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
