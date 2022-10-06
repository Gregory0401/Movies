import Axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'a4bc470e2c9f83a606b7ff9bda48baef';
let page = 1;

const fetchPopularMovies = async () => {
  const response = await Axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}&page=${page}`
  );

  return response;
};

const fetchMovieDetails = async id => {
  const response = await Axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY}&append_to_response=videos,credits,reviews`
  );
  const result = response.data;

  return result;
};

const fetchMoviesBySearchquery = async searchQuery => {
  const response = await Axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${searchQuery}`
  );
  const result = response.data;
  return result;
};

export { fetchPopularMovies, fetchMovieDetails, fetchMoviesBySearchquery };
