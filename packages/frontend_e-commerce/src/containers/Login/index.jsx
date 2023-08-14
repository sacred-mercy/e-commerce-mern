import Button from "../../components/Button";
import InputTextBox from "../../components/InputTextBox";
import { useState } from "react";
import URLConfig from "../../config/url";

function Login(props) {
	const { setUser } = props;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => {
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
			}
		} else {
			console.log("error");
		}
	};

	return (
		<>
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
		</>
	);
}

export default Login;
