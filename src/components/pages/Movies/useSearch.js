import { useEffect, useRef, useState } from 'react';
import { searchMovie } from '../../../services/themoviedb.api';

export const useSearch = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const searchRef = useRef(search);
  const pageRef = useRef(page);

  useEffect(() => {
    if (search === '') return;
    if (searchRef.current === search && pageRef.current === page) {
      setError(`Change your search "${search}" by new, please.`)
      return;
    }
    searchRef.current = search
    setLoading(true);
    searchMovie(search, page)
      .then((data) => {
        const {results, total_pages: totalPages, total_results: totalResults} = data;
        if (totalResults === 0) {
          throw new Error(`Your search "${search}" brought result: 0. Change it.`)
        }
        setError(null);
        setMovies(p => searchRef.current === search
          ? [...p, ...results]
          : [...results]);
        setTotalResults(totalResults);
        setTotalPages(totalPages);
      })
      .catch((e) => {
        setError(e.message);
        setMovies([]);
        setPage(1);
      })
      .finally(() => setLoading(false));
    return () => {};
  }, [search, page, setTotalResults]);

  return {error, loading, page, setPage, movies, totalPages, totalResults}
}
