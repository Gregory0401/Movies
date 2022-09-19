import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovieCredits } from '../../../services/themoviedb.api';

export default function Cast() {
  const {movieId} = useParams();
  const {isLoading, data, error} = useQuery(['movies', movieId, 'cast'],
    () => fetchMovieCredits(movieId));
  console.log(data);
  return (
    <div>
      {error && <h1>Error: {error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {!error && !isLoading &&
        <div>Cast</div>
      }
    </div>
  );
};
