import { useEffect, useState } from "react";

export default function Pagination({ totalCount, setCurrentPage, currentPage }) {
	const [pages, setPages] = useState([]);

	useEffect(() => {
		let pages = [];
		for (let i = 1; i <= Math.ceil(totalCount / 10); i++) {
			pages.push(i);
		}
		setPages(pages);
	}, [totalCount]);

	return (
		<div className="flex justify-center">
			<div className="flex rounded-md mt-8">
				<a
					onClick={() => {
						if (currentPage > 1) {
							setCurrentPage(currentPage - 1);
						}
					}}
					className="px-3 py-2 mx-1 cursor-pointer rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300">
					P
				</a>
				{pages.map((page) => {
					let className =
						page === currentPage
							? "bg-pink-500 text-pink-900 hover:bg-pink-300"
							: "bg-gray-200 text-gray-600 hover:bg-gray-300";

					let styleColor =
						"px-3 py-2 mx-1 rounded-md cursor-pointer " + className;

					return (
						<button
							key={page}
							onClick={() => setCurrentPage(page)}
							className={styleColor}>
							{page}
						</button>
					);
				})}
				<a
					onClick={() => {
						if (currentPage < pages.length) {
							setCurrentPage(currentPage + 1);
						}
					}}
					className="px-3 py-2 mx-1 cursor-pointer rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300">
					N
				</a>
			</div>
		</div>
	);
}
