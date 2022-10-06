import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import Loader from '../components/Loader';
import RejectedQuery from '../components/RejectedQuery';
import MoviesList from '../components/MoviesList';
import { fetchMoviesBySearchquery } from '../services/fetcherAPI';
import { toast } from 'react-toastify';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('idle');
  let navigate = useNavigate();
  let location = useLocation();

  const newPathname = location.pathname + location.search;

  const queryFromUrl = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (queryFromUrl) {
      setSearchQuery(queryFromUrl);
    }

    if (searchQuery === '') {
      return;
    }

    setStatus('pending');

    fetchMoviesBySearchquery(searchQuery).then(response => {
      setResults(prevState => {
        return [...prevState, ...response.results];
      });
      setStatus('resolved');

      if (response.results.length === 0) {
        setStatus('rejected');
      }
    });
  }, [queryFromUrl, searchQuery]);

  const onFormSubmit = newSearchQuery => {
    if (newSearchQuery === searchQuery) {
      toast.error(`"${newSearchQuery}" results are already here!`);
      return;
    }
    setSearchQuery(newSearchQuery);
    setResults([]);
    navigate({ ...location, search: `query=${newSearchQuery}` });
  };

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />
      {status === 'idle' && null}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <RejectedQuery searchQuery={searchQuery} />}
      {status === 'resolved' && (
        <MoviesList movies={results} pathname={newPathname} />
      )}
    </>
  );
};

export default MoviesPage;
