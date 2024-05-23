import { FC } from "react";
import type { Movie } from "@/types";
import Button from "@/components/UI/Button/Button";
import Favorite from "../UI/Icons/Favorite";
import Share from "../UI/Icons/Share";
import Star from "../UI/Icons/Star";
import EmptyStar from "../UI/Icons/EmptyStar";

type MovieProps = {
	movie: Movie;
};

const Movie: FC<MovieProps> = ({ movie }) => {
	return (
		<div className="group relative bg-blue-900 rounded-xl overflow-hidden">
			<div className="absolute top-0 left-0 p-2 rounded-bl-xl z-10 opacity-80 group-hover:opacity-100 flex flex-row justify-between w-full">
				<Favorite />
				<Share />
			</div>

			<img
				src={
					movie.poster_path
						? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
						: "https://dummyimage.com/300x500/eeeeee/767676&text=No+Image+Available"
				}
				alt={movie.title}
				className="relative h-full w-full object-cover object-center lg:h-full lg:w-full opacity-80 group-hover:opacity-100"
			/>
			<div className="absolute bottom-0 flex flex-col justify-between p-2 w-full h-[46%] bg-gradient-to-t from-slate-900 md:from-70% group-hover:from-20%  to-transparent">
				<div className="flex justify-center">
					{Array.from({ length: 5 }).map((_, i) => (
						<span key={i}>
							{Number(movie.vote_average) / 2 > i ? (
								<Star />
							) : (
								<EmptyStar />
							)}
						</span>
					))}
				</div>
				<h3 className="text-lg text-white text-center mt-4">
					<a href="#">{movie.title}</a>
				</h3>
				<div className="flex justify-center">
					<Button movieId={movie.id}>Read More</Button>
				</div>
			</div>
		</div>
	);
};

export default Movie;
