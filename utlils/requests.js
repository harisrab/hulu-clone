const API_KEY = process.env.API_KEY;

export default {
	fetchTrending: {
		title: "Trending",
		url: `/trending/all/week?api_key=04fe389312f78181212ec3d09399a8be&language=en_US`,
	},
	fetchTopRated: {
		title: "Top Rated",
		url: `/movie/top_rated?api_key=04fe389312f78181212ec3d09399a8be&language=en-US`,
	},
	fetchActionMovies: {
		title: "Action",
		url: `/discover/movie?api_key=04fe389312f78181212ec3d09399a8be&with_genres=28`,
	},
	fetchComedyMovies: {
		title: "Comedy",
		url: `/discover/movie?api_key=04fe389312f78181212ec3d09399a8be&with_genres=35`,
	},
	fetchHorrorMovies: {
		title: "Horror",
		url: `/discover/movie?api_key=04fe389312f78181212ec3d09399a8be&with_genres=27`,
	},
	fetchRomanceMovies: {
		title: "Romance",
		url: `/discover/movie?api_key=04fe389312f78181212ec3d09399a8be&with_genres=10749`,
	},
	fetchMystery: {
		title: "Mystery",
		url: `/discover/movie?api_key=04fe389312f78181212ec3d09399a8be&with_genres=9648`,
	},
	fetchSciFi: {
		title: "Sci-Fi",
		url: `/discover/movie?api_key=04fe389312f78181212ec3d09399a8be&with_genres=878`,
	},
	fetchWestern: {
		title: "Western",
		url: `/discover/movie?api_key=04fe389312f78181212ec3d09399a8be&with_genres=37`,
	},
	fetchAnimation: {
		title: "Animation",
		url: `/discover/movie?api_key=04fe389312f78181212ec3d09399a8be&with_genres=16`,
	},
	fetchTV: {
		title: "TV Shows",
		url: `/discover/movie?api_key=04fe389312f78181212ec3d09399a8be&with_genres=10770`,
	},
};
