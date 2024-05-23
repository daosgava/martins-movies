import { FC } from "react";
import type { Movie } from "@/types";

type MovieProps = {
	movie: Movie;
};

const Movie: FC<MovieProps> = ({ movie }) => {
	return (
		<div className="group relative">
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
				<img
					src={
						movie.poster_path
							? movie.poster_path
							: "https://dummyimage.com/300x500/eeeeee/767676&text=IMAGE+NOT+AVAILABLE"
					}
					alt={movie.title}
					className="h-full w-full object-cover object-center lg:h-full lg:w-full"
				/>
			</div>
			<div className="mt-4 flex flex-col justify-center">
				<h3 className="text-sm text-gray-700">
					<a href="#">
						<span aria-hidden="true" className="absolute inset-0" />
						{movie.title}
					</a>
				</h3>
			</div>
		</div>
	);
};

export default Movie;
