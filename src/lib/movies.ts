import { Movie } from "@/types";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (keyword: string, page: number) => {
	const res = await fetch(
		`${BASE_URL}/search/movie?query=${keyword}&page=${page}&api_key=${API_KEY}`,
	);
	const { results, total_pages } = await res.json();
	const movies = results.map(async (movie: Movie) => {
		const details = await fetch(
			`${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}`,
		);
		const { imdb_id } = await details.json();
		return {
			...movie,
			imdbId: imdb_id,
		};
	});
	const moviesWithDetails = await Promise.all(movies);

	return {
		movies: moviesWithDetails,
		totalPages: total_pages,
	};
};
