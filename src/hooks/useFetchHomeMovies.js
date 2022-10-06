import { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../services/fetcherAPI';

const useFetchHomeMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      setIsLoading(true);
      try {
        const items = await fetchPopularMovies();
        setMovies(items.data.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrending();
  }, []);
  return { movies, isLoading };
};

export default useFetchHomeMovies;
