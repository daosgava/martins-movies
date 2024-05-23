import { Suspense } from "react";
import MovieList from "@/components/MovieList/MovieList";
import InputSearch from "@/components/UI/InputSearch/InputSearch";
import Pagination from "@/components/UI/Pagination/Pagination";
import { fetchMovies } from "@/lib/movies";
import Loading from "./loading";

type SearchParams = {
	keyword?: string;
	page?: string;
};

type HomeProps = {
	searchParams?: SearchParams;
};

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
	const keyword = searchParams?.keyword || "";
	const currentPage = Number(searchParams?.page) || 1;

	const { movies, totalPages } = await fetchMovies(keyword, currentPage);

	return (
		<main className={`flex ${movies.length ? "min-h-screen" : "h-auto"} flex-col items-center justify-between p-16`}>
			<InputSearch />
			{
				!movies.length
				? <p className="text-2xl text-center text-slate-300 mt-6">No movies found</p>
				: null
			}
			<Suspense key={keyword + currentPage} fallback={<Loading />}>
				<MovieList movies={movies} />
			</Suspense>
			{
				movies.length 
				? <Pagination totalPages={totalPages} currentPage={currentPage} />
				: null
			}
		</main>
	);
};

export default Home;
