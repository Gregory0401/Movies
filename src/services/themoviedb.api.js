export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '20d1927a0e32ed91fd5455d37cc9aa27';
const baseOptions = {
  'api_key': API_KEY,
  'language': 'en-US',
}
const getParamsString = (options = {}) => {
  return Object.entries({
    ...baseOptions,
    ...options,
  }).map(([key, value]) => `${key}=${value}`).join('&');
};

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'))
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/movie/day?${getParamsString()}`);
}

export function fetchDetailMovie(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?${getParamsString()}`);
}

export function fetchMovieCredits(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/credits?${getParamsString()}`);
}

export function fetchMovieReviews(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/reviews?${getParamsString()}`);
}

export function searchMovie(query, page) {
  if (query === '') return;
  const options = {query, page};
  return fetchWithErrorHandling(`${BASE_URL}/search/movie?${getParamsString(options)}`);
}
