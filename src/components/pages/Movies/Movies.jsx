import { useContext, useEffect } from 'react';
import { useSearch } from './useSearch';
import s from './Movies.module.css';
import Container from '../../common/Container';
import MoviesSearchList from '../../common/MoviesSearchList';
import { moviesSearchValueCtx } from '../../../context/MoviesSearchValue/moviesSearchValueCtx';
import { useLocation } from 'react-router-dom';

export default function Movies() {
  const location = useLocation();
  const { search, setTotalResults, setMoviesCount } = useContext(moviesSearchValueCtx);
  const { error, loading, page, setPage, movies, totalPages, totalResults } = useSearch(
    { search });

    const searchValue = location.search.replace(/\?query=/, '') || '';
    const { setSearch } = useContext(moviesSearchValueCtx)
  // console.log(111111111111, searchValue, useContext(moviesSearchValueCtx));
  useEffect(() => {
    searchValue && setSearch(searchValue);
    setMoviesCount(movies.length);
    setTotalResults(totalResults);
    // eslint-disable-next-line 
  }, [movies.length, setMoviesCount, setTotalResults, totalResults]);

  return (
    <div className={s.container}>
      <Container>
        {!error && movies?.length > 0 && <MoviesSearchList movies={movies} query={search} />}
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
