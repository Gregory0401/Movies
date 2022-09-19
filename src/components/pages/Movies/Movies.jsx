import { useContext, useEffect } from 'react';
import { useSearch } from './useSearch';
import s from './Movies.module.css';
import Container from '../../common/Container';
import MoviesSearchList from '../../common/MoviesSearchList';
import { moviesSearchValueCtx } from '../../../context/MoviesSearchValue/moviesSearchValueCtx';

export default function Movies() {
  const { search, setTotalResults, setMoviesCount } = useContext(moviesSearchValueCtx);
  const { error, loading, page, setPage, movies, totalPages, totalResults } = useSearch(
    { search });

  useEffect(() => {
    setMoviesCount(movies.length);
    setTotalResults(totalResults);
  }, [movies.length, setMoviesCount, setTotalResults, totalResults]);

  return (
    <div className={s.container}>
      <Container>
        {!error && movies?.length > 0 && <MoviesSearchList movies={movies} />}
        {error && <div>Error: {error}</div>}
        {loading && <div>Loading...</div>}
        {!loading && !error && page < totalPages
          && <button onClick={() => setPage(p => p + 1)}>
            More {page}/{totalPages}
          </button>}
      </Container>
    </div>
  );
};
