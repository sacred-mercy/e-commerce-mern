import { useEffect, useState } from "react";
import Button from "./Button";

export default function Pagination({
	totalCount,
	setCurrentPage,
	currentPage,
}) {
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
				<Button
					onClick={() => {
						if (currentPage > 1) {
							setCurrentPage(currentPage - 1);
						}
					}}
					disabled={currentPage === 1}>
					P
				</Button>
				{pages.map((page) => {
					let styleColor =
						page === currentPage
							? "bg-pink-500 text-pink-900 hover:bg-pink-300"
							: "bg-gray-200 text-gray-600 hover:bg-gray-300";
					return (
						<Button
							key={page}
							onClick={() => setCurrentPage(page)}
							cssClass={styleColor}>
							{page}
						</Button>
					);
				})}
				<Button
					onClick={() => {
						if (currentPage < pages.length) {
							setCurrentPage(currentPage + 1);
						}
					}}
					disabled={currentPage === pages.length}>
					N
				</Button>
			</div>
		</div>
	);
}
