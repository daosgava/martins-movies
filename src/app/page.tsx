import { Suspense } from "react";
import MovieList from "@/components/MovieList/MovieList";
import Pagination from "@/components/UI/Pagination/Pagination";
import { fetchMovies } from "@/lib/movies";
import Loading from "./loading";
import { Socket } from "dgram";

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

	if (!movies.length) 
		return (<p className="text-2xl text-center text-slate-300 mt-6">...</p>);

	return (
		<>
			<Suspense key={keyword + currentPage} fallback={<Loading />}>
				<MovieList movies={movies} />
			</Suspense>
			<Pagination totalPages={totalPages} currentPage={currentPage} />
		</>
	);
};

export default Home;
