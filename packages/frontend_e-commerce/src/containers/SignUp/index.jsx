import { useState } from "react";

// components
import Button from "../../components/Button";
import InputTextBox from "../../components/InputTextBox";
import URLConfig from "../../config/url";

function SignUp() {
	const [input, setInput] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [signingUp, setSigningUp] = useState(false);
	const [error, setError] = useState("");

	function handleInputChange(e) {
		setError("");
		console.log(e.target.name, e.target.value);
		setInput({ ...input, [e.target.name]: e.target.value });
	}

	const handleSignIn = async (e) => {
		setSigningUp(true);
		e.preventDefault();
		const response = await fetch(URLConfig("/users/signup"), {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(input),
		});
		if (response) {
			const json = await response.json();
			setError(json.message);
		} else {
			setError("Something went wrong");
		}
		setSigningUp(false);
	};

	return (
		<>
			{!signingUp ? (
				<div className="flex items-center justify-center h-screen">
					<div className="bg-white p-16 rounded shadow-2xl w-2/3">
						<h2 className="text-3xl font-bold mb-10 text-gray-800">Sign In</h2>
						<form onSubmit={handleSignIn}>
							<div className="mb-5">
								<InputTextBox
									id="name"
									label="Name"
									type="text"
									name="name"
									placeholder="Enter your name"
									value={input.name}
									onChange={handleInputChange}
								/>
							</div>
							<div className="mb-5">
								<InputTextBox
									id="email"
									label="Email"
									type="email"
									name="email"
									placeholder="Enter your email"
									value={input.email}
									onChange={handleInputChange}
								/>
							</div>
							<div className="mb-5">
								<InputTextBox
									id="password"
									label="Password"
									type="password"
									name="password"
									placeholder="Enter your password"
									value={input.password}
									onChange={handleInputChange}
								/>
							</div>
							{error !== "" ? (
								<div className="mb-5 flex justify-center">
									<p className="text-red-500">{error}</p>
								</div>
							) : null}
							<Button type="submit" color="blue-700" textColor="white">
								Sign Up
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
							Signing up...
						</h2>
					</div>
				</div>
			)}
		</>
	);
}

export default SignUp;
