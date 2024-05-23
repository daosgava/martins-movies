import { FC } from "react";
import type { Movie } from "@/types";
import MovieComponent from "../Movie/Movie";

type MovieListProps = {
	movies: Movie[];
};

const MovieList: FC<MovieListProps> = async ({ movies }) => {
	return (
		<div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			{movies.map((movie: Movie) => (
				<MovieComponent key={movie.id} movie={movie} />
			))}
		</div>
	);
};

export default MovieList;
