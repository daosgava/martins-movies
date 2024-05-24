"use client";

import { FC, useState } from "react";
import { fetchMovieDetails } from "../../../lib/movies";
import Loading from "../Loading/Loading";

type ButtonProps = {
	movieId: number;
	children: string;
};

const Button: FC<ButtonProps> = ({ movieId, children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const movieDetail = await fetchMovieDetails(movieId);
			if (
				!("imdb_id" in movieDetail) ||
				movieDetail.imdb_id === null ||
				movieDetail.imdb_id === ""
			)
				return;
			window.open(
				`https://www.imdb.com/title/${movieDetail.imdb_id}`,
				"_blank",
			);
		} catch (error) {
			console.log("error", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<button
			className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-md mt-2 w-[140px]"
			onClick={handleClick}
		>
			{isLoading ? <Loading /> : children}
		</button>
	);
};

export default Button;
