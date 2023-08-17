import { useState } from "react";

// components
import Button from "../../components/Button";
import InputTextBox from "../../components/InputTextBox";
import URLConfig from "../../config/url";

function Login(props) {
	const { setUser } = props;
	const [login, setLogin] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => {
		setLogin(true);
		e.preventDefault();
		console.log("requesting login");
		const response = await fetch(URLConfig("/users/login"), {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
		if (response) {
			const json = await response.json();
			console.log("json", json);
			// if login is successful, set the user state and save token to local storage
			if (json.token) {
				setUser(json.user);
				localStorage.setItem("token", json.token);
				localStorage.setItem("user", JSON.stringify(json.user));

				// redirect to home page using react router dom
				window.location.href = "/";
			} else {
				console.log("error");
				setLogin(false);
			}
		} else {
			console.log("error");
			setLogin(false);
		}
	};

	return (
		<>
			{!login ? (
				<div className="flex items-center justify-center h-screen">
					<div className="bg-white p-16 rounded shadow-2xl w-2/3">
						<h2 className="text-3xl font-bold mb-10 text-gray-800">Login</h2>
						<form onSubmit={handleLogin}>
							<div className="mb-5">
								<InputTextBox
									id="email"
									label="Email"
									type="email"
									name="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="mb-5">
								<InputTextBox
									id="password"
									label="Password"
									type="password"
									name="password"
									placeholder="Enter your password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<Button type="submit" color="blue-700" textColor="white">
								Login
							</Button>
						</form>
					</div>
				</div>
			) : (
				<div className="flex items-center justify-center h-screen">
					<div className="flex flex-col items-center justify-center">
						<svg
							className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24">
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						<h2 className="text-3xl font-bold mt-8 text-gray-800">
							Logging in...
						</h2>
					</div>
				</div>
			)}
		</>
	);
}

export default Login;
