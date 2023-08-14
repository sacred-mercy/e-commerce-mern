import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<div className="bg-white rounded-lg shadow-lg p-8">
				<h1 className="text-3xl font-bold text-red-500 mb-4">Oops!</h1>
				<p className="text-lg text-gray-700 mb-4">
					Sorry, an unexpected error has occurred.
				</p>
				<p className="text-lg text-gray-700 mb-4">
					<i>{error.statusText || error.message}</i>
				</p>
				<a
					href="/"
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
					Go to homepage
				</a>
			</div>
		</div>
	);
}
