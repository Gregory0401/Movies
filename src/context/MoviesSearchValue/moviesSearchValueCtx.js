import { createContext, useMemo, useState } from 'react';

const initContext = {
  search: '',
  totalResults: 0,
  moviesCount: 0,
}

export const moviesSearchValueCtx = createContext(initContext);

export default function MoviesSearchValueCtx({children}) {
  const [search, setSearch] = useState(initContext.search);
  const [totalResults, setTotalResults] = useState(initContext.totalResults);
  const [moviesCount, setMoviesCount] = useState(initContext.moviesCount);

  const providerValue = useMemo(() => (
    {search, setSearch, totalResults, setTotalResults, moviesCount, setMoviesCount}),
    [moviesCount, search, totalResults]);

  return (
    <moviesSearchValueCtx.Provider value={providerValue}>
      {children}
    </moviesSearchValueCtx.Provider>
  )
}
