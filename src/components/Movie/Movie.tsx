import { FC } from "react";
import type { Movie } from "@/types";

type MovieProps = {
	movie: Movie;
};

const Movie: FC<MovieProps> = ({ movie }) => {
	return (
		<div className="group relative bg-blue-900 rounded-xl overflow-hidden">
			<img
				src={
					movie.poster_path
						? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
						: "https://dummyimage.com/300x500/eeeeee/767676&text=IMAGE+NOT+AVAILABLE"
				}
				alt={movie.title}
				className="relative h-full w-full object-cover object-center lg:h-full lg:w-full opacity-80 group-hover:opacity-100"
			/>

			<div className="absolute bottom-0 mt-4 flex flex-col justify-between p-2 w-full h-[40%] bg-gradient-to-t from-slate-900 from-90% md:from-70% group-hover:from-20%  to-transparent">
				<h3 className="text-lg text-white text-center mt-4">
					<a href="#">{movie.title}</a>
				</h3>
				<div className="flex justify-center">
					<button className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-md mt-2 w-[140px]">
						Read More
					</button>
				</div>
			</div>
		</div>
	);
};

export default Movie;
