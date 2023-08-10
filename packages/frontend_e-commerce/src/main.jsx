import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/signup",
    element: <h1>Signup</h1>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
