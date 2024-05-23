"use client";
import { FC } from "react";
import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { usePathname, useSearchParams } from "next/navigation";

type PaginationProps = {
	totalPages: number;
	currentPage: number;
};

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleArrowClick = (direction: "left" | "right") => {
		if (direction === "left" && currentPage === 1) return;
		if (direction === "right" && currentPage === totalPages) return;

		const params = new URLSearchParams(searchParams);
		if (direction === "left") {
			params.set("page", String(currentPage - 1));
		} else {
			params.set("page", String(currentPage + 1));
		}
		window.location.href = `${pathname}?${params.toString()}`;
	};

	const handleNumberClick = (page: number) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", String(page));
		window.location.href = `${pathname}?${params.toString()}`;
	};

	return (
		<nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 w-full">
			<div className="-mt-px flex w-0 flex-1">
				<a
					href="#"
					className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-cyan-300 hover:text-gray-700"
					onClick={() => handleArrowClick("left")}
				>
					<ArrowLongLeftIcon
						className="mr-3 h-5 w-5 text-gray-400"
						aria-hidden="true"
					/>
					Previous
				</a>
			</div>
			<div className="hidden md:-mt-px md:flex max-w-[80%] overflow-scroll">
				{Array.from({ length: totalPages }, (_, i) => (
					<a
						key={i}
						href="#"
						onClick={() => handleNumberClick(i + 1)}
						className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium ${
							i + 1 === currentPage
								? "text-cyan-500"
								: "text-gray-500"
						} hover:border-cyan-300 hover:text-cyan-700`}
					>
						{i + 1}
					</a>
				))}
			</div>
			<div className="-mt-px flex w-0 flex-1 justify-end">
				<a
					href="#"
					onClick={() => handleArrowClick("right")}
					className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-cyan-300 hover:text-cyan-700"
				>
					Next
					<ArrowLongRightIcon
						className="ml-3 h-5 w-5 text-gray-400"
						aria-hidden="true"
					/>
				</a>
			</div>
		</nav>
	);
};

export default Pagination;
