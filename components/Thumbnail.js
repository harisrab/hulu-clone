import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

const Thumbnail = ({ result }) => {
	const BASE_URL = "https://image.tmdb.org/t/p/original";

	return (
		<div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
			<Image
				layout="responsive"
				src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
				height={1080}
				width={1920}
				alt="movie_image"
			/>

			<div className="p-2">
				<p className="truncate max-w-md">{result.overview}</p>
				<h2 className="mt-1 text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
					{result.title || result.original_name}
				</h2>
				<p className="flex space-x-1 items-center opacity-0 group-hover:opacity-100">
					<span>
						{result.release_date || result.first_air_date} •
					</span>
					<span>
						<ThumbUpIcon className="h-5 nx-2" />
					</span>
					<span>{result.vote_count}</span>
				</p>
			</div>
		</div>
	);
}

export default Thumbnail;
