const key = '8ab59f96432c0db8ebf24f4b3e47fd0a';

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=27`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
// https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
